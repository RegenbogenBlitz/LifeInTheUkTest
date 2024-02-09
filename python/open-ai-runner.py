import os
import requests
import re

def read_file(file_name):
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Join the script directory with the file name
    file_path = os.path.join(script_dir, file_name)
    
    with open(file_path, 'r') as file:
        return file.read().strip()

def query_openai(endpoint, api_key, text, sentence, previousQuestions):
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': f'{api_key}',
    }

    previousQuestionsText = '\n'.join(previousQuestions)

    data = {
        'messages': [
            {
            'role': 'system',
            'content':
                'You are an AI assistant that generates practice questions for the Life in The UK Test. ' +
                'When given a section from the Life in The UK Test handbook and a sentence from that section, you generate multiple choice questions based on that sentence, in the format of the Life in The UK Test. '+
                'You generate as many questions as needed to cover each important fact in the sentence. ' +
                'You do not ask about multiple facts in the same question. '+
                'You make sure the questions ONLY require knowledge that is in the section provided! ' +
                'You make sure the questions DO NOT require information that is not in the Life in The UK Test handbook!'+
                'You make sure all and only the answers designated as "correctAnswers" are true. ' +
                'If there are multiple correct answers, where sensible you do not just link them all together as one answer with an "and", instead you return them all as separate items in the correctAnswers array. ' +
                'You make sure all the answers designated as "incorrectAnswers" are false. ' +
                'You make sure all the incorrectAnswers are plausible. ' +
                'You try to include at least 6 incorrectAnswers. ' +
                'When possible, you try to use information from the rest of the book to make choosing the correct answer(s) more difficult. ' +
                'You do not invent dates, people, places or events (e.g. battles), but use plausible ones from the rest of the book.'
            },
            {
            'role': 'user',
            'content': 'Here is a section from the Life in The UK Test handbook.'
            },
            {
            'role': 'assistant',
            'content': 'Awaiting section.'
            },
            {
            'role': 'user',
            'content': text
            },
            {
            'role': 'assistant',
            'content': 'Understood.'
            },
            {
            'role': 'user',
            'content': 'Here is sentence from that section.'
            },
            {
            'role': 'assistant',
            'content': 'Awaiting sentence.'
            },
            {
            'role': 'user',
            'content': sentence
            },
            {
            'role': 'assistant',
            'content': 'Understood.'
            },
            {
            'role': 'user',
            'content': 
            'Here are the questions I have generated so far. Try to avoid asking the same question in different ways.'
            },
            {
            'role': 'assistant',
            'content': 'Awaiting previous questions.'
            },
            {
            'role': 'user',
            'content': '\n'.join(previousQuestions)
            },
            {
            'role': 'assistant',
            'content': 'Understood.'
            },
            {
            'role': 'user',
            'content': 
            'Generate me questions for this sentence from this section.'
            },

        ],
        'tools': [
            {
                'type': 'function',
                'function': {
                    'name': 'create_question',
                    'description': 'Create a multiple choice question based on a sentence from the Life in The UK Test handbook',
                    'parameters': {
                        'type': 'object',
                        'properties': {
                            'questions': {
                                'type': 'array',
                                'items': {
                                    'type': 'object',
                                    'properties': {
                                        'question': {
                                            'type': 'string',
                                            'description': 'The text of the question'
                                        },
                                        'correctAnswers': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            },
                                            'description': 'The correct answers to the question'
                                        },
                                        'incorrectAnswers': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            },
                                            'description': 'The incorrect answers to the question'
                                        },
                                    },
                                    'required': ['question', 'correctAnswers', 'incorrectAnswers']
                                }
                            }
                        }
                    }
                }
            }
        ],
        'tool_choice': {
            'type': 'function',
            'function': {
                'name': 'create_question'
            }
        },
        'temperature': 0.7,
        'top_p': 0.95,
        'frequency_penalty': 0,
        'presence_penalty': 0,
        'max_tokens': 3200
    }

    response = requests.post(endpoint, headers=headers, json=data)
    if response.status_code == 200:
        try:
            return response.json()
        except json.decoder.JSONDecodeError:
            print("JSONDecodeError: ", response.content)
    else:
        print("Error: ", response.status_code, response.text)

api_key = read_file('keys.txt')
endpoint = read_file('endpoint.txt')
text = read_file('text.txt')

sentences = text.split('.')
sentences = list(filter(None, sentences))

questions = []

for sentence in sentences:
    response = query_openai(endpoint, api_key, text, sentence, questions)
    message = response['choices'][0]['message']
    tool_calls = message['tool_calls']
    if not tool_calls:
        throw('No tool calls found in response')

    print('---------------------------------')
    for tool_call in tool_calls:
        function = tool_call['function']
        if not function['name'] == 'create_question':
            throw('Unexpected function name in tool call')
        
        function_args = function['arguments']
        print(function_args)