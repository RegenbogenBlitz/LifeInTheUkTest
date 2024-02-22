import os
import requests
import re
import asyncio
import aiohttp
import json
import time

print_counter = 0
wait_space = 0

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
    global wait_space
    max_index = 3
    for i in range(max_index + 1):
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
                    wait_space = 0
                    try:
                        return await response.json()
                    except json.decoder.JSONDecodeError:
                        print("JSONDecodeError: ", response.content)
                elif response.status == 429:
                    if i == max_index:
                        print("Rate limit exceeded, max retries reached")
                        raise Exception(f"Error: {response.status} {await response.text()}")

                    response_text = await response.text()
                    match = re.match(r'.*Please retry after (\d+) second*', response_text)
                    if match:
                        wait_time = int(match.group(1)) + wait_space
                        wait_space += 10
                        print(f"Rate limit exceeded, waiting {wait_time} seconds")
                        await asyncio.sleep(wait_time)
                    else:
                        raise Exception(f"Error: {response.status} {await response.text()}")
                else:
                    raise Exception(f"Error: {response.status} {await response.text()}")
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
            'In each question you include all relevant context for that question, as you are aware that the person answering the question will not be told beforehand what sentence the question is referring to, nor what section the question comes from.'
            'You make sure all and only the answers designated as "correctAnswers" are true. ' +
            'If there are multiple correct answers, where sensible you do not just link them all together as one answer with an "and", instead you return them all as separate items in the correctAnswers array. ' +
            'You make sure all the answers designated as "incorrectAnswers" are false. ' +
            'You make sure all the incorrectAnswers are plausible. ' +
            'You try to include at least 6 incorrectAnswers. ' +
            'When possible, you try to use information from the rest of the book to make choosing the correct answer(s) more difficult. ' +
            'You do not invent dates, people, places or events (e.g. battles), but use plausible ones from the rest of the book. ' +
            'Do not asks questions that require the answer \'yes\', \'no\', \'true\' or \'false\'. Instead, ask questions that require the answer to be a specific fact. '
        },
        {
        'role': 'user',
        'content': 'Here is a section from the Life in The UK Test handbook.'
        },
        {
        'role': 'user',
        'content': text
        },
        {
        'role': 'user',
        'content': 'Here is sentence from that section.'
        },
        {
        'role': 'user',
        'content': sentence
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
                'description': 'Create questions based on a sentence from the Life in The UK Test handbook',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'questions': {
                            'type': 'array',
                            'items': {
                                'type': 'object',
                                'properties': {
                                    'question_text': {
                                        'type': 'string',
                                        'description': 'The text of the question'
                                    },
                                    'correct_answers': {
                                        'type': 'array',
                                        'items': {
                                            'type': 'string'
                                        },
                                        'description': 'The correct answers to the question'
                                    },
                                    'incorrect_answers': {
                                        'type': 'array',
                                        'items': {
                                            'type': 'string'
                                        },
                                        'description': 'The incorrect answers to the question'
                                    },
                                },
                                'required': ['question', 'correct_answers', 'incorrect_answers']
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

def create_ambiguity_conversation():
    return [
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "What is the definition of \'bunting\' as described in the Life in The UK Test handbook?"'
        },
        {
        'role': 'assistant',
        'content': 'Yes, the question is ambiguous. The question should never refer to "the handbook" or "the Life in The UK Test handbook".'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "How many people lived in Britain according to the sentence"'
        },
        {
        'role': 'assistant',
        'content': 'Yes, the question is ambiguous. The person answering the question will never be told in advance what sentence a question will refer to.'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "How many people lived in Britain according to this section"'
        },
        {
        'role': 'assistant',
        'content': 'Yes, the question is ambiguous. The person answering the question will never be told in advance what section a question will refer to.'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "How many people lived in Britain during this period?"'
        },
        {
        'role': 'assistant',
        'content': 'Yes, the question is ambiguous. It is not clear what period is being referred to.'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "How many people lived in Britain at the end of the last glacial ice age?"'
        },
        {
        'role': 'assistant',
        'content': 'No, the question is not ambiguous. It is clear what period is being referred to.'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "What did the king do after the battle?"'
        },
        {
        'role': 'assistant',
        'content': 'Yes, the question is ambiguous. It is not clear what king is being referred to nor what battle in their reign is being referred to.'
        },
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "What did Æthelred the Unready do after the Battle of Maldon?"'
        },
        {
        'role': 'assistant',
        'content': 'No, the question is not ambiguous. It is clear what king is being referred to and the event concerned.'
        }
    ]

def create_check_question_for_ambiguity_request(question_text):
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that is an expert in the Life in The UK Test. ' +
            'When given a question from the Life in The UK Test, you are able to check whether the question is ambiguous or not. ' +
            'A question is ambiguous if it refer to things not included in the question. '
        }
    ]
    messages.extend(create_ambiguity_conversation())
    messages.append(
        {
        'role': 'user',
        'content': 'Is the following question ambiguous? "' + question_text + '"'
        })

    tools = [
        {
            'type': 'function',
            'function': {
                'name': 'provide_correct_answer',
                'description': 'Provide the correct answer to a question based on the Life in The UK Test handbook',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'is_ambiguous': {
                            'type': 'boolean',
                            'description': 'Whether the question was ambiguous or not'
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
            'name': 'provide_correct_answer'
        }
    }

    return messages, tools, tool_choice

def create_improve_question_clarity_request(text, sentence, question, reasoning):
    messages = [
        {
        'role': 'system',
        'content':
            'You are an AI assistant that is an expert in the Life in The UK Test. ' +
            'When given a question from the Life in The UK Test, you are able to check whether the question is ambiguous or not. ' +
            'A question is ambiguous if it refer to things not included in the question. ' +
            'If a question is ambiguous, you are able to provide a non ambiguous version of the question.'
        }]
    messages.extend(create_ambiguity_conversation())
    messages.extend([
        {
        'role': 'user',
        'content': 'Here is a section from the Life in The UK Test handbook.'
        },
        {
        'role': 'user',
        'content': text
        },
        {
        'role': 'user',
        'content': 'Here is sentence from that section.'
        },
        {
        'role': 'user',
        'content': sentence
        },
        {
        'role': 'user',
        'content': 'Here is a question based on that sentence.'
        },
        {
        'role': 'user',
        'content': question['question_text']
        },
        {
        'role': 'user',
        'content': 'Is it ambiguous?'
        },
        {
        'role': 'assistant',
        'content': 'Yes it is ambiguous. ' + reasoning
        },
        {
        'role': 'user',
        'content': 'Provide an improved version of this last question that is not ambiguous. If necessary, fill in the ambiguity with guesses, based on the sentence and the section.'
        },
        {
        'role': 'user',
        'content': 'Here are the correct answer(s) to the last question: ' + ', '.join('"' + answer + '"' for answer in question['correct_answers'])
        },
        {
        'role': 'user',
        'content': 'Here are the incorrect answer(s) to the last question: ' + ', '.join('"' + answer + '"' for answer in question['incorrect_answers'])
        }
    ])

    tools = [
        {
            'type': 'function',
            'function': {
                'name': 'create_question',
                'description': 'Create a non-ambiguous question based on a sentence from the Life in The UK Test handbook',
                'parameters': {
                    'type': 'object',
                    'properties': {
                        'question_text': {
                            'type': 'string',
                            'description': 'The improved, non-ambiguous text of the question.'
                        },
                        'correct_answers': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            },
                            'description': 'The correct answers to the new question'
                        },
                        'incorrect_answers': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            },
                            'description': 'The incorrect answers to the new question'
                        },
                    },
                    'required': ['question_text', 'correct_answers', 'incorrect_answers']
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

async def process_question_async(text, sentence, question, call_openai_async):
    global print_counter
    print_counter += 1
    local_print_counter = print_counter
    try:
        for i in range(3):
            question_text = question['question_text']
            print(f"{local_print_counter} Attempt {i+1}/3. Processing question: {question_text}")
            request = create_check_question_for_ambiguity_request(question_text)
            response = await call_openai_async(request)
            if response['is_ambiguous']:
                reasoning = response['reasoning']
                print(str(local_print_counter) + ' Question is ambiguous')
                print(str(local_print_counter) + ' Reasoning: ' + reasoning)
                request = create_improve_question_clarity_request(text, sentence, question, reasoning)
                question = await call_openai_async(request)
            else:
                print(str(local_print_counter) + ' Question is not ambiguous')
                return Result_Success(question)

        print(str(local_print_counter) + ' Question ambiguity could not be fixed')
        return Result_Success(question)

    except Exception as e:
        print('Error processing question: ')
        print(e)
        return Result_Error(e, question)

async def process_sentence_async(text, sentence, call_openai_async):
    global print_counter
    print_counter += 1
    local_print_counter = print_counter
    try:
        print(str(local_print_counter) + ' Processing sentence: ' + sentence)
        request = create_get_questions_request(text, sentence)
        response = await call_openai_async(request)

        question_results = await asyncio.gather(*[process_question_async(text, sentence, question, call_openai_async) for question in response['questions']])
    
        print(str(local_print_counter) + ' Processing results...')
        results = []
        for question_result in question_results:
            if isinstance(question_result, Result_Success):
                question = question_result.result
                results.append(Result_Success((sentence, question)))
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

        questions = []
        error_results = []
        for sentence_result in sentence_results:
            if(isinstance(sentence_result, Result_Success)):
                question_results = sentence_result.result
                for question_result in question_results:
                    if isinstance(question_result, Result_Success):
                        sentence, question = question_result.result
                        questions.append(question)
                    elif isinstance(question_result, Result_Error):
                        error_results.append(question_result.error)
                    else:
                        raise Exception('Unknown result type')
            elif isinstance(sentence_result, Result_Error):
                error_results.append(sentence_result.error)
            else:
                raise Exception('Unknown result type')

        print('Questions: ')
        print(json.dumps(questions, indent=4))
        print('Errors: ')
        print(json.dumps(error_results, indent=4))

    except Exception as e:
        print('Error: ')
        print(e)
        raise e

asyncio.run(main())