from flask import Flask, jsonify, request
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv, find_dotenv


_ = load_dotenv(find_dotenv())
client = OpenAI(api_key=os.environ['OPENAI_API_KEY'])

def generate_response(conversation, model="gpt-4-0125-preview"):
    response = client.chat.completions.create(
        model=model,
        messages=conversation
    )
    return response.choices[0].message.content

app = Flask(__name__)
CORS(app)

@app.route('/api/submit', methods=['POST'])
def handleSubmit():
    data = request.json
    print(data)

    messages = [{'role': 'system', 'content': "You are an advanced digital assistant created for the Chevron New Energies and New Energy Technologies information page. Your main role is to provide insightful, current, and detailed information about Chevron's initiatives and advancements in new energy sectors, including renewable energy, carbon capture and storage, hydrogen energy, and geothermal power. Educate users about Chevron's strategic investments in low-carbon technology, partnerships for sustainable energy solutions, and projects aimed at reducing carbon footprint and advancing the global energy transition. Offer guidance on how Chevron is innovating in energy efficiency, electrification, and biofuels, and how these efforts contribute to environmental sustainability and energy security. Your responses should be accurate, reflect Chevron's commitment to innovation and sustainability in energy, and direct users to relevant resources for more in-depth information. Avoid speculation and ensure all information provided aligns with Chevron's latest public disclosures and sustainability reports. Do not exceed the limit of 100 words. Perform internet searched if needed."}]
    for msg in data:
        # Assuming each message in 'data' has 'sender' and 'text' keys
        role = 'user' if msg['sender'] == 'user' else 'assistant'
        messages.append({'role': role, 'content': msg['text']})

    # Generate a response using the OpenAI API
    bot_response = generate_response(messages)

    print(bot_response)

    # Return the response
    return jsonify({'status': 'Success', 'data': bot_response})

if __name__ == '__main__':
    app.run(debug=True)
