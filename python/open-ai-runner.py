import os
import requests
import re
import asyncio
import aiohttp
import json
import time

def read_file(file_name):
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Join the script directory with the file name
    file_path = os.path.join(script_dir, file_name)
    
    with open(file_path, 'r') as file:
        return file.read().strip()

async def query_openai_async(session, endpoint, api_key, messages, tools, tool_choice):
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': f'{api_key}',
    }

    data = {
        'messages': messages,
        'tools': tools,
        'tool_choice': tool_choice,
        'temperature': 0.7,
        'top_p': 0.95,
        'frequency_penalty': 0,
        'presence_penalty': 0,
        'max_tokens': 3200
    }

    try:
        async with session.post(endpoint, headers=headers, json=data) as response:
            if response.status == 200:
                try:
                    return await response.json()
                except json.decoder.JSONDecodeError:
                    print("JSONDecodeError: ", response.content)
            else:
                print("Error: ", response.status, await response.text())
    except Exception as e:
        print("Error posting: ", e)

def create_get_questions_request(text, sentence):
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that generates practice questions for the Life in The UK Test. ' +
            'When given a section from the Life in The UK Test handbook and a sentence from that section, you generate multiple choice questions based on that sentence, in the format of the Life in The UK Test. '+
            'You generate as many questions as needed to cover each important fact in the sentence. ' +
            'You do not ask about multiple facts in the same question. '+
            'You make sure the questions ONLY require knowledge that is in the section provided! ' +
            'You make sure the questions DO NOT require information that is not in the Life in The UK Test handbook!'+
            'You do not make references to the Life in The UK Test handbook, the Life in The UK Test in the questions or answers. ' +
            'You do not refer to things not included in the question with phrases such as "the sentence", "this time period", "this time", "the king", "the ... referred to" etc. unless identifying this is the purpose of the question. ' +
            'Instead, you include all relevant context in the question, as you are aware that the person answering the question will not be told beforehand what sentence the question is referring to, nor what section the question comes from. ' +
            'You make sure all and only the answers designated as "correctAnswers" are true. ' +
            'If there are multiple correct answers, where sensible you do not just link them all together as one answer with an "and", instead you return them all as separate items in the correctAnswers array. ' +
            'You make sure all the answers designated as "incorrectAnswers" are false. ' +
            'You make sure all the incorrectAnswers are plausible. ' +
            'You try to include at least 6 incorrectAnswers. ' +
            'When possible, you try to use information from the rest of the book to make choosing the correct answer(s) more difficult. ' +
            'You do not invent dates, people, places or events (e.g. battles), but use plausible ones from the rest of the book. '
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
        'Generate me questions for this sentence from this section.'
        }
    ]

    tools = [
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
    ]

    tool_choice = {
        'type': 'function',
        'function': {
            'name': 'create_question'
        }
    }

    return messages, tools, tool_choice

def create_guess_correct_answer_request(question_text):
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that is an expert in the Life in The UK Test. ' +
            'When given a question from the Life in The UK Test, you are able to give the correct answer, even without the multiple choice options. '
        },
        {
        'role': 'user',
        'content': question_text
        }
    ]

    tools = [
        {
            'type': 'function',
            'function': {
                'name': 'provide_correct_answer',
                'description': 'Provide the correct answer to a question based on the Life in The UK Test handbook',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'correctAnswers': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            },
                            'description': 'Correct answer (or correct answers if there is more than one) to the question'
                        }
                    }
                }
            }
        }
    ]

    tool_choice = {
        'type': 'function',
        'function': {
            'name': 'provide_correct_answer'
        }
    }

    return messages, tools, tool_choice

def create_confirm_correct_answer_request(question_text, actual_correct_answers, given_correct_answers):
    given_correct_answers_text = ', '.join(given_correct_answers)
    actual_correct_answers_text = ', '.join(actual_correct_answers)
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that is an expert in the Life in The UK Test. ' +
            'When given a question from the Life in The UK Test, you are able to give the correct answer, even without the multiple choice options. ' +
            'You are also able to confirm whether a given answer is correct or not. ' +
            'An answer is considered correct if it is one of the correct answers to the question.' +

            'For example: ' +
            'If the question is "Where did the storming of the Bastille take place?" and the actual correct answer is "Paris" ' + 
            'then "In Paris" or "In the centre of Paris" would count as correct, as they are accurate and at least as precise as the actual correct answer. ' + 
            '"In France" or "A large city in the north of the country" would not count as correct, as though accurate, it is less precise than the actual correct answer. They also do not demonstrate knowledge of the name of the city, and the name of the city was used in the question. '  +

            'If the question is "When did the Plague of Justinian occur?" and the actual correct answer is "In the 500s" ' + 
            'then "In the mid 500s", "In the 540s" or "541" would count as correct, as they are accurate and at least as precise as the actual correct answer. ' + 
            '"In the Middle Ages" would not count as correct, as though accurate, it is less precise than the actual correct answer. ' +
            '"During the reign of Justinian" and "When people died of plague in Byzantine Empire" would also not count as correct, as it does not demonstrate knowledge of the years, and the years are used in the actual correct answer.'
        },
        {
        'role': 'user',
        'content': question_text
        },
        {
        'role': 'assistant',
        'content': given_correct_answers_text
        },
        {
        'role': 'user',
        'content': 'Here are the actual correct answer(s): ' + actual_correct_answers_text
        },
        {
        'role': 'user',
        'content': 'Did you give all the correct answer(s)?'
        }
    ]

    tools = [
        {
            'type': 'function',
            'function': {
                'name': 'confirm_whether_correct_answer_was_given',
                'description': 'The AI assistant confirms whether the given answer is correct or not',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'correct_answer_was_given': {
                            'type': 'boolean',
                            'description': 'Whether the correct answer was given or not'
                        }
                    }
                }
            }
        }
    ]

    tool_choice = {
        'type': 'function',
        'function': {
            'name': 'confirm_whether_correct_answer_was_given'
        }
    }

    return messages, tools, tool_choice


async def get_questions():
    api_key = read_file('keys.txt')
    endpoint = read_file('endpoint.txt')
    text = read_file('text.txt')

    sentences = text.split('.')
    sentences = list(filter(None, sentences))

    tasks = []
    responses = None
    print("Getting questions...")
    async with aiohttp.ClientSession() as session:
        for sentence in sentences:
            messages, tools, tool_choice = create_get_questions_request(text, sentence)
            task = query_openai_async(session, endpoint, api_key, messages, tools, tool_choice)
            tasks.append(task)
        responses = await asyncio.gather(*tasks)
    print("Processing responses...")

    tool_calls = [response['choices'][0]['message']['tool_calls'] for response in responses]
    tool_calls = [item for sublist in tool_calls for item in sublist]

    results = []
    for tool_call in tool_calls:
        function = tool_call['function']
        if not function['name'] == 'create_question':
            throw('Unexpected function name in tool call')

        function_args = function['arguments']
        function_args = json.loads(function_args)
        results.extend(function_args['questions'])
    return results

async def multi_api_call(inputs, create_request, function_name, argument_name):
    api_key = read_file('keys.txt')
    endpoint = read_file('endpoint.txt')

    tasks = []

    responses = None
    print("Calling OpenAI...")
    async with aiohttp.ClientSession() as session:
        for input in inputs:
            messages, tools, tool_choice = create_request(input)
            task = query_openai_async(session, endpoint, api_key, messages, tools, tool_choice)
            tasks.append((input, task))
        responses = await asyncio.gather(*(task for (input, task) in tasks))
    
    input_response_pairs = [(input, response) for response, (input, task) in zip(responses, tasks)]

    print("Processing responses...")
    tool_calls = [(input, response['choices'][0]['message']['tool_calls']) for (input, response) in input_response_pairs]

    results = []
    for (input, tool_call_array) in tool_calls:
        if not isinstance(tool_call_array, list):
            throw('Unexpected tool call array')
        
        if not len(tool_call_array) == 1:
            throw('Unexpected number of tool calls')
        
        tool_call = tool_call_array[0]

        function = tool_call['function']
        if not function['name'] == function_name:
            throw('Unexpected function name in tool call')

        function_args = function['arguments']
        function_args = json.loads(function_args)
        argument_value = function_args[argument_name]

        results.append((input, argument_value))
    return results

# --------------------------------------------------------------------------
questions = asyncio.run(get_questions())
print(json.dumps(questions, indent=4))

def make_guess_correct_answers_request(question):
    questionText = question['question']
    return create_guess_correct_answer_request(questionText)

question_guess_pairs = asyncio.run(multi_api_call(
    questions,
    make_guess_correct_answers_request, 
    'provide_correct_answer', 
    'correctAnswers'))
print(question_guess_pairs)

print("Waiting one minute...")
for i in range(60, 0, -10):
    print(i)
    time.sleep(10)

def make_confirm_whether_correct_answers_given_request(question_guess_pair):
    question, guessed_correct_answers = question_guess_pair
    questionText = question['question']
    correct_answers = question['correctAnswers']

    return create_confirm_correct_answer_request(questionText, correct_answers, guessed_correct_answers)

confirmations = asyncio.run(multi_api_call(
    question_guess_pairs, 
    make_confirm_whether_correct_answers_given_request, 
    'confirm_whether_correct_answer_was_given', 
    'correct_answer_was_given'))
print(confirmations)
