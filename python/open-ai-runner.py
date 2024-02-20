import os
import requests
import re
import asyncio
import aiohttp
import json
import time

class Result_Success:
    def __init__(self, result):
        self.result = result

class Result_Error:
    def __init__(self, error, partial_result):
        self.error = error
        self.partial_result = partial_result

def read_file(file_name):
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Join the script directory with the file name
    file_path = os.path.join(script_dir, file_name)
    
    with open(file_path, 'r') as file:
        return file.read().strip()

async def query_openai_async(session, endpoint, api_key, messages, tools, tool_choice):
    try:
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
        raise e

async def make_request_async(session, endpoint, api_key, messages, tools, tool_choice):
    response = await query_openai_async(session, endpoint, api_key, messages, tools, tool_choice)
    
    tool_calls = response['choices'][0]['message']['tool_calls']

    if not isinstance(tool_calls, list):
        throw('Unexpected tool_calls is not a list')
    
    if not len(tool_calls) == 1:
        throw('Unexpected number of tool calls')
    
    tool_call = tool_calls[0]

    function = tool_call['function']
    if not function['name'] == tools[0]['function']['name']:
        throw('Unexpected function name in tool call')

    function_args = function['arguments']
    function_args = json.loads(function_args)

    function_def_args = tools[0]['function']['parameters']['properties']

    function_argument_values = {k: function_args[k] for k in function_def_args.keys()}

    return function_argument_values

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

def create_confirm_correct_answer_request(question_text, expected_correct_answers, proposed_correct_answers):
    proposed_correct_answers_text = ', '.join(proposed_correct_answers)
    expected_correct_answers_text = ', '.join(expected_correct_answers)
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that is an expert examiner for the Life in The UK Test. ' +
            'When given a question from the Life in The UK Test, the expected correct answer(s), and the proposed answer(s), ' +
            'you are able to confirm whether the proposed answer(s) is correct or not. ' +
            'The proposed answer(s) are considered correct ' +
            'if for each proposed answer, there is a matching expected correct answer; ' +
            'and for each expected correct answer, there is a matching proposed answer. ' +

            'For example: ' +
            'If the question is "Where did the storming of the Bastille take place?" and the expected correct answer is "Paris" ' + 
            'then either "In Paris" or "In the centre of Paris" would count as correct, as they are accurate and at least as precise as the expected correct answer. ' + 
            '"In France" or "A large city in the north of the country" would not count as correct, as though accurate, they are less precise than the expected correct answer. They also do not demonstrate knowledge of the name of the city, and the name of the city was used in the question. '  +

            'If the question is "When did the Plague of Justinian occur?" and the expected correct answer is "In the 500s" ' + 
            'then anby of "In the mid 500s", "In the 540s" or "541" would count as correct, as they are accurate and at least as precise as the expected correct answer. ' + 
            '"In the Middle Ages" would not count as correct, as though accurate, they are less precise than the expected correct answer. ' +
            '"During the reign of Justinian" and "When people died of plague in Byzantine Empire" would also not count as correct, as they do not demonstrate knowledge of the years, and the years are used in the actual correct answer.'
        },
        {
        'role': 'user',
        'content': question_text
        },
        {
        'role': 'user',
        'content': 'Here are the expected correct answer(s): ' + expected_correct_answers_text
        },
        {
        'role': 'user',
        'content': 'Here are the proposed answer(s): ' + proposed_correct_answers_text
        },
        {
        'role': 'user',
        'content': 'Are the proposed answer(s) correct?'
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
                        },
                        'reasoning': {
                            'type': 'string',
                            'description': 'The reasoning behind the AI assistant\'s decision'
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

async def process_question_async(question, call_openai_async):
    try:
        request = create_guess_correct_answer_request(question['question'])
        response = await call_openai_async(request)
        proposed_correct_answers = response['correctAnswers']

        request = create_confirm_correct_answer_request(question['question'], question['correctAnswers'], proposed_correct_answers)
        response = await call_openai_async(request)
        confirmation = response['correct_answer_was_given']
        reasoning = response['reasoning']
        
        return Result_Success((question, proposed_correct_answers, confirmation, reasoning))
    except Exception as e:
        print('Error processing question: ')
        print(e)
        return Result_Error(e, question)

async def process_sentence_async(text, sentence, call_openai_async):
    try:
        request = create_get_questions_request(text, sentence)
        response = await call_openai_async(request)
        questions = response['questions']

        question_results = await asyncio.gather(*[process_question_async(question, call_openai_async) for question in questions])
    
        results = []
        for question_result in question_results:
            if isinstance(question_result, Result_Success):
                results.append(Result_Success((sentence, question_result.result)))
            elif isinstance(question_result, Result_Error):
                question = question_result.partial_result
                results.append(Result_Error(question_result.error, (sentence, question)))
            else:
                raise Exception('Unknown result type')
        return Result_Success(results)
    except Exception as e:
        print('Error processing sentence: ')
        print(e)
        return Result_Error(e, sentence)

async def main():
    try:
        api_key = read_file('keys.txt')
        endpoint = read_file('endpoint.txt')
        text = read_file('text.txt')

        sentences = text.split('.')
        sentences = list(filter(None, sentences))

        print('Processing sentences: ')
        async with aiohttp.ClientSession() as session:
            def call_openai_async(request):
                messages, tools, tool_choice = request
                return make_request_async(session, endpoint, api_key, messages, tools, tool_choice)

            sentence_results = await asyncio.gather(*[process_sentence_async(text, sentence, call_openai_async) for sentence in sentences])

        for sentence_result in sentence_results:
            if(isinstance(sentence_result, Result_Success)):
                results = sentence_result.result
                success_results = [success_result.result for success_result in results if isinstance(success_result, Result_Success)]
                error_results = [(error_result.error, error_result.partial_result) for error_result in results if isinstance(error_result, Result_Error)]
                print('Successes: ')
                print(json.dumps(success_results, indent=4))
                print('Errors: ')
                print(json.dumps(error_results, indent=4))
            elif isinstance(sentence_result, Result_Error):
                print('Error: ')
                print(sentence_result.error)
                print('Partial result: ')
                print(sentence_result.partial_result)
            else:
                raise Exception('Unknown result type')

    except Exception as e:
        print('Error: ')
        print(e)
        raise e

asyncio.run(main())