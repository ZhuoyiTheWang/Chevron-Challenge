# Chevron New Energies Interactive Learning Hub

## Objective

Our project aims to create a compelling educational platform for young adults in high school and college, enhancing their understanding of the current and prospective energy landscape. The tool focuses on elucidating the significance, advantages, and functions of emergent energy technologies, particularly those emphasized by Chevron New Energies, such as carbon capture, utilization, and storage (CCUS), hydrogen, renewable fuels and products, and carbon offsets. Additionally, the platform encompasses a broader spectrum of energy sources and technologies.


## Solution Overview

We have engineered a web application that integrates React for the frontend and Flask for the backend. The application provides an informative yet interactive experience, with detailed pages on various new energy technologies.


### Key Features

- **Informative Pages**: Each page hosts a wealth of knowledge on new energy sources, detailed with visuals and interactive elements to facilitate learning.
- **Chatbot**: A sophisticated chatbot powered by the OpenAI API is available to answer queries regarding new energies, thus making the learning process interactive and responsive.
- **Memory Game**: To augment engagement and solidify knowledge retention, a memory game is integrated into the platform. This feature is designed to be fun and educational, with the potential to offer prizes that incentivize participation.

## Installation

### Prerequisites
- Node.js (v18 or later)
- Python (v3.8 or later)
- React
- Next.js
- pip (Python package installer)
- Materials UI
- flask
- flask-CORS
- python-dotenv
- openai
- react-dom

### Frontend Setup
1. Navigate to the react-front-end directory
1. Install dependencies with _npm install_
1. Build the application with _npm run build_
1. Run the application with _npm start_

### Backend Setup
1. Navigate the flask-back-end directory
1. Create a python virtual environment _python -m venv venv_
1. Start the virutal environment
1. Install dependencies with _pip install_
1. Obtain an OpenAI API key and store it in a file name _.env_ in the following format: 'OPENAI_API_KEY=***'
1. Run the application with _python app.py_

## Usage
- **Homepage**: Access the homepage by navigating to localhost:3000 after starting the React application.
- **Learning Pages**: Click on the tabs for CCUS, Renewable Energy and Hydrogen, Carbon Offsets, and Partnerships to learn about each topic.
- **Chatbot**: Interact with the chatbot by clicking on the 'Chevron Help Bot' button and typing in your questions.
- **Memory Game**: Click on the 'Memory Game' tab to start the game and test your knowledge on new energy technologies.

