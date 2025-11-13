<!-- # NOcrastinator
> This chatbot no matter whatever the user sends, respond with a no response from [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service)
<!-- Alt name noracle 
----
## Tech Stack
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Framer-Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

---

## Project Structure
```bash
no-chatbot/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── proxy-server.js           ← optional Express proxy
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── no/route.ts   ← Next.js built-in API route (optional alternative to Express)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── Chatbot.tsx       ← main chat UI
│   ├── lib/
│   │   └── api.ts            ← helper for API calls
│   └── theme.ts              ← custom MUI theme
├── public/
│   └── favicon.ico
└── .eslintrc.json

```

## Features

 - Chatbot layout
 - Later Combine with text to speech functionality for response and speech to text for user and only after the user approves can it be sent
 - Gibberish Identification

## Getting Started
 run the development server:

```bash
npm run dev
```
## Node Packages
```bash
    npm install express cors node-fetch
```
## Absoultely crucial:
DO NOT FORGET TO RUN THE EXPRESS JS PROXY ON PORT 5000

IN A SEPARATE TERMINAL 
Run this command
```bash
    node proxy-server.js
```
TODO: MAKE THE CHATBOT LOOK LIKE IT!
TODO: MAKE SURE TO USE THE LIB/API.TS
<!-- ## Tech Stack
- NextJs
- Tailwindcss
- Typescript
- Material UI
- Express Js (Proxy Server)
- framer-motion -->

# NOcrastinator

> **The chatbot that respectfully declines everything.** Powered by [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service), NOcrastinator responds to every user message with a creative "no" response.

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Material UI](https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Express](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)
![ESLint](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

---

## 📁 Project Structure

```bash
no-chatbot/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── proxy-server.js              # Express proxy server
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── no/route.ts      # Next.js API route (alternative)
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   └── Chatbot.tsx          # Main chat interface
│   ├── lib/
│   │   └── api.ts               # API utility functions
│   └── theme.ts                 # Custom Material-UI theme
├── public/
│   └── favicon.ico
└── .eslintrc.json
```

---

## ✨ Features

- **Intelligent Chat Interface** – Clean, responsive chatbot UI with smooth animations
- **Voice Integration** *(Coming Soon)* – Text-to-speech for responses and speech-to-text for user input with approval workflow
- **Gibberish Detection** – Identifies and handles nonsensical input gracefully

---

## 🛠️ Getting Started

### Installation

Install the required dependencies:

```bash
npm install
```

### Development

Start the Next.js development server:

```bash
npm run dev
```

### ⚠️ Critical: Run the Proxy Server

The Express proxy server **must be running** on port 5000. Open a **separate terminal** and execute:

```bash
node proxy-server.js
```

---

## 📦 Dependencies

Install the Express proxy dependencies:

```bash
npm install express cors node-fetch
```

---

## 📋 Roadmap

- [ ] Enhance chatbot visual design
- [ ] Integrate `lib/api.ts` utility functions throughout the application
- [ ] Implement voice-to-text and text-to-voice functionality
- [ ] Add user approval workflow for voice submissions

---

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❌ by developers who appreciate a good "no."**