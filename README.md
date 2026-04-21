# AI Chat UI (Full Stack)

A full-stack AI chat application built with React, Tailwind CSS, Express, and Google Gemini API.

## Features

- Multi-chat system
- Persistent chat history (localStorage)
- Delete chats
- Markdown rendering
- Copy-to-clipboard responses
- Typing indicator
- Context-aware AI responses (chat memory)
- Gemini API integration

## Tech Stack

Frontend:

- React (Vite)
- Tailwind CSS

Backend:

- Node.js
- Express.js
- Google Gemini API

## Project Structure

ai-chat-ui/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── server/ # Express backend
│ ├── index.js
│ ├── .env
│ └── package.json
│
└── README.md

## Setup

### 1. Clone repo

git clone https://github.com/PratyusH-27-2005/ai-chat-ui.git
cd ai-chat-ui

## 2. Setup backend

cd server
npm install

Create .env:
GEMINI_API_KEY=your_api_key_here

Run backend:
npm run dev

## 3. Setup frontend

cd client
npm install
npm run dev

Open:
http://localhost:5173

Note:
Make sure backend runs on port 5000.

## How It Works

User sends message from frontend
Request sent to backend (/api/chat)
Backend calls Gemini API
Response returned and rendered as markdown
Chat history maintained per session

## Author

Pratyush Shrivastava
