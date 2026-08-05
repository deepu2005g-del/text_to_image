live server : https://text-to-image-iota-brown.vercel.app/  # Text-to-Image Generator

A simple full-stack AI Text-to-Image Generator built with **React**, **Node.js**, **Express**, and the **Clipdrop Text-to-Image API**. Users can enter a text prompt, generate an AI image, preview it, and download the generated image.

---

## Features

- Generate AI images from text prompts
- Simple and responsive user interface
- Download generated images
- Express.js backend using Axios
- Secure API key management with environment variables
- React frontend with clean layout

---

## Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- Axios
- FormData
- Dotenv
- CORS

### AI API
- Clipdrop Text-to-Image API

---

## Project Structure

```
text_to_image/
│
├── backend/
│   ├── routes/
│   │   └── generate.js
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/username/repo.git

cd text_to_image
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
CLIPDROP_API_KEY=YOUR_CLIPDROP_API_KEY
PORT=5000
```

Start the backend server.

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React application.

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## License

This project is licensed under the MIT License.
