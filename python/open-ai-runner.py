import os
import requests

def read_file(file_name):
    # Get the directory of the current script
    script_dir = os.path.dirname(os.path.realpath(__file__))
    # Join the script directory with the file name
    file_path = os.path.join(script_dir, file_name)
    
    with open(file_path, 'r') as file:
        return file.read().strip()

def query_openai(endpoint, api_key):
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'api-key': f'{api_key}',
    }

    data = {
        'messages': [
            {
            'role': 'user',
            'content': 'Tell me the recipe for pancakes'
            }
        ],
        'temperature': 0.7,
        'top_p': 0.95,
        'frequency_penalty': 0,
        'presence_penalty': 0,
        'max_tokens': 800
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
response = query_openai(endpoint, api_key)
print(response)
