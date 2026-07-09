# 🎵 VibeTune AI

> AI-powered music recommendation system that analyzes an image and recommends the perfect soundtrack for your vibe.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![FastAPI](https://img.shields.io/badge/FastAPI-0.116-green?logo=fastapi)
![Python](https://img.shields.io/badge/Python-3.13-yellow?logo=python)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange?logo=google)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-blue?logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?logo=render)

---

## Live Demo

**Frontend:** https://vibe-tune-ai-jt8a.vercel.app/results

**Backend API:** https://vibetuneai-2.onrender.com/

---

## Overview

VibeTune AI analyzes an uploaded photo using **Google Gemini AI** and predicts:

- 😊 Mood
- 👕 Outfit Style
- 📍 Location
- ☀️ Lighting
- ✨ Aesthetic
- 🎵 Music Genre

It then recommends songs that match the overall vibe using the **Deezer API**, generates an Instagram-ready caption, and explains why those songs fit the image.

---

## Features

- Drag & Drop Image Upload
- AI-powered Image Analysis (Google Gemini)
- Music Recommendation
- 30-second Song Preview
- Instagram-inspired UI
- AI-generated Caption
- One-click Caption Copy
- AI Reasoning
- Animated Loading Experience
- Dark Mode Design
- Fully Deployed

---

## Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- React Router
- Axios
- React Dropzone
- Lucide React

### Backend

- FastAPI
- Python
- Google Gemini API
- Deezer API
- Uvicorn

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Prabil155/VibeTuneAI.git
cd VibeTuneAI
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```


## Project Structure

```
VibeTuneAI
│
├── backend
│   ├── services
│   ├── uploads
│   ├── app.py
│   └── requirements.txt
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```


## Author

**Prabil Timalsena**

GitHub:
https://github.com/Prabil155


---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.
