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
            'You do not refer to things not included in the question with phrases such as "the sentence", "this time period", "the king" etc. unless identifying this is the purpose of the question. ' +
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
            'You are also able to confirm whether a given answer is correct or not. '
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
        'content': 'Did you give the correct answer(s)?'
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

async def guess_correct_answers(questions):
    api_key = read_file('keys.txt')
    endpoint = read_file('endpoint.txt')

    tasks = []

    responses = None
    print("Guessing correct answers...")
    async with aiohttp.ClientSession() as session:
        for question in questions:
            questionText = question['question']
            messages, tools, tool_choice = create_guess_correct_answer_request(questionText)
            task = query_openai_async(session, endpoint, api_key, messages, tools, tool_choice)
            tasks.append((question, task))
        responses = await asyncio.gather(*(task for (question, task) in tasks))
    
    question_response_pairs = [(question, response) for response, (question, task) in zip(responses, tasks)]

    print("Processing responses...")
    tool_calls = [(question, response['choices'][0]['message']['tool_calls']) for (question, response) in question_response_pairs]

    results = []
    for (question, tool_call_array) in tool_calls:
        if not isinstance(tool_call_array, list):
            throw('Unexpected tool call array')
        
        if not len(tool_call_array) == 1:
            throw('Unexpected number of tool calls')
        
        tool_call = tool_call_array[0]

        function = tool_call['function']
        if not function['name'] == 'provide_correct_answer':
            throw('Unexpected function name in tool call')

        function_args = function['arguments']
        function_args = json.loads(function_args)
        guessed_correct_answers = function_args['correctAnswers']

        results.append((question, guessed_correct_answers))
    return results

async def confirm_whether_correct_answers_given(question_guess_pairs):
    api_key = read_file('keys.txt')
    endpoint = read_file('endpoint.txt')

    tasks = []

    responses = None
    print("Confirming correct answers...")
    async with aiohttp.ClientSession() as session:
        for question_guess_pair in question_guess_pairs:
            question, guessed_correct_answers = question_guess_pair
            questionText = question['question']
            correct_answers = question['correctAnswers']

            messages, tools, tool_choice = create_confirm_correct_answer_request(questionText, correct_answers, guessed_correct_answers)
            task = query_openai_async(session, endpoint, api_key, messages, tools, tool_choice)
            tasks.append((question_guess_pair, task))
        responses = await asyncio.gather(*(task for (question_guess_pair, task) in tasks))
    
    question_response_pairs = [(question_guess_pair, response) for response, (question_guess_pair, task) in zip(responses, tasks)]

    print("Processing responses...")
    tool_calls = [(question_guess_pair, response['choices'][0]['message']['tool_calls']) for (question_guess_pair, response) in question_response_pairs]

    results = []
    for (question_guess_pair, tool_call_array) in tool_calls:
        if not isinstance(tool_call_array, list):
            throw('Unexpected tool call array')
        
        if not len(tool_call_array) == 1:
            throw('Unexpected number of tool calls')
        
        tool_call = tool_call_array[0]

        function = tool_call['function']
        if not function['name'] == 'confirm_whether_correct_answer_was_given':
            throw('Unexpected function name in tool call')

        function_args = function['arguments']
        function_args = json.loads(function_args)
        correct_answer_was_given = function_args['correct_answer_was_given']

        results.append((question_guess_pair, correct_answer_was_given))
    return results


questions = asyncio.run(get_questions())
print(json.dumps(questions, indent=4))
correctAnswers = asyncio.run(guess_correct_answers(questions))
print(correctAnswers)

# wait one minute
print("Waiting one minute...")
# count down from 60 seconds every 10 seconds
for i in range(60, 0, -10):
    print(i)
    time.sleep(10)

confirmations = asyncio.run(confirm_whether_correct_answers_given(correctAnswers))
print(confirmations)
