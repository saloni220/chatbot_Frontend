# 🤖 ChatGPT-Style Interview Chatbot  
A modern **ChatGPT-style chatbot** with dark mode UI, smooth chat bubbles, left-right alignment, and a Node.js + MongoDB backend.  
This bot helps users practice interview questions (HR + Technical) in a conversational way.

---

## 🚀 Features

### 🎨 Frontend (React + Vite)
- ChatGPT-style dark theme UI  
- User messages → **Right side (Blue bubble)**  
- Bot messages → **Left side (Gray bubble)**  
- Smooth message animation  
- Typing indicator  
- Responsive and clean layout  

### 🧠 Backend (Node.js + Express + MongoDB)
- Smart predefined interview Q/A  
- HR, Technical, Soft skills & Resume questions  
- Saves messages in MongoDB  
- Clean controller + model structure  

---

## 📡 API Endpoint

**POST /bot/v1/message**

### Request Body:
```json
{
  "text": "hello"
}
```

### Response Example:
```json
{
  "userMessage": "hello",
  "botMessage": "Hi there! Ready to practice interview questions?"
}
```

---

## 🛠️ Tech Stack

### 🌐 Frontend
- React  
- Vite  
- CSS (Custom ChatGPT-style UI)

### 🖥️ Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose)  

---

## 📥 Installation & Setup

### 👉 Clone the Repository
```bash
git clone https://github.com/saloni220/chatbot.git
cd chatbot
```

---

## 🔧 Backend Setup
```bash
cd backend
npm install
npm start
```

### Create a `.env` file:
```
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

---

## 🎨 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Create a `.env` file:
```
VITE_API_URL=http://localhost:3000/bot/v1/message
```

Open in browser:  
👉 http://localhost:5173

---

## 📁 Project Structure

```
chatbot/
│── backend/
│   ├── model/
│   ├── controller/
│   ├── routes/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── ChatWindow.jsx
    │   │   └── Message.jsx
    │   ├── App.jsx
    │   └── index.css
```

---

## 🚀 Future Improvements
- Chat history (MongoDB)  
- User login system  
- Light + Dark theme toggle  
- Sidebar like ChatGPT  
- AI-powered answers (OpenAI/GPT API)  
- Voice-based chat  

---

## 👩‍💻 Author
**Saloni**  
Full Stack Developer  
Passionate about building real-world applications ❤️

---

## ⭐ Support
If you like this project, please ⭐ star this repository!

