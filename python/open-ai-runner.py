import os
import requests

def read_file(file_name):
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Join the script directory with the file name
    file_path = os.path.join(script_dir, file_name)
    
    with open(file_path, 'r') as file:
        return file.read().strip()

def query_openai(endpoint, api_key, text):
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': f'{api_key}',
    }

    data = {
        'messages': [
            {
            'role': 'user',
            'content': 'I''m going to give you a section from the Life in The UK Test handbook. Please read it.'
            },
            {
            'role': 'assistant',
            'content': 'OK'
            },
            {
            'role': 'user',
            'content': text
            },
            {
            'role': 'assistant',
            'content': 'OK I have read it. I understand it entirely, and understand how it compares to the other sections in the handbook.'
            },
            {
            'role': 'user',
            'content': 'Now generate me some multiple choice questions based on each sentence of the section, in the format of the Life in The UK Test. /n Generate as many questions as needed to cover each important fact in each sentence. Try not to ask about multiple facts in the same question. /n For each question, make sure all the answers are plausible. Make sure only the correctAnswers are true, all the incorrectAnswers must be false. /n When possible, try to use information from the rest of the book to make the question more difficult. Where possible, do not invent dates, people, places or events (e.g. battles), but use plausible ones from the rest of the book./n Return your questions in the following format:/n ``` /n {/n question: "YOUR QUESTION",/n correctAnswers: ["CORRECT ANSWER"],/n incorrectAnswers: ["INCORRECT ANSWER 1", "INCORRECT ANSWER 2" etc]/n }/n ```/n If there are multiple correct answers, return them all in the correctAnswers array. Try to include at least 6 incorrect answers.'
            }
        ],
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

response = query_openai(endpoint, api_key, text)
message = response['choices'][0]['message']['content']
print(message)