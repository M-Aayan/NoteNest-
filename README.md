<div align="center">

# 📝 NoteNest

### A beginner-friendly React notes application built to practice real-world React concepts.

<p>
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
</p>

<p>
  <a href="#-features">Features</a> •
  <a href="#-preview">Preview</a> •
  <a href="#-getting-started">Getting Started</a> •
  <a href="#-what-youll-learn">What You'll Learn</a> •
  <a href="#-future-improvements">Roadmap</a>
</p>

</div>

---

## 📌 About

**NoteNest** is a simple, responsive note-taking web application created as a practical project while learning React.

The purpose of this project is not to build a large production-level notes platform. Instead, it demonstrates how fundamental React concepts can be combined to create a complete, interactive frontend application.

It is particularly useful for beginners who have learned basic React concepts and want to move from isolated examples to building something functional.

> **Learning by building:** NoteNest turns React concepts such as state, forms, events, arrays, and dynamic rendering into one practical project.

---

## ✨ Features

| Feature | Description |
|---|---|
| 📝 Create Notes | Add a title and description through a controlled React form |
| 🗑️ Delete Notes | Remove individual notes from the Recent Notes section |
| ⚡ Dynamic Rendering | Notes are rendered dynamically using `.map()` |
| 🎛️ React State | `useState` manages form values and the notes collection |
| 📱 Responsive UI | Layout adapts to different screen sizes |
| 📜 Scrollable Notes | Long notes and multiple notes are handled with scrollable areas |
| 🎨 Clean Interface | Minimal purple-themed interface with responsive styling |
| 🧩 Component Based | Header, Section, and Footer are separated into components |

---

## 🖼️ Preview

### Full Application

<p align="center">
  <img src="./assets/notenest-preview.png" alt="NoteNest application preview" width="100%">
</p>

### 📝 Note Creation

<p align="center">
  <img src="./assets/note-creation-form.png" alt="NoteNest note creation form" width="90%">
</p>

The note form demonstrates controlled inputs, React state, and form submission handling.

### 📋 Recent Notes

<p align="center">
  <img src="./assets/recent-notes.png" alt="NoteNest recent notes section" width="90%">
</p>

The Recent Notes section demonstrates dynamic rendering, deletion, responsive cards, and overflow handling.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React** | Building the user interface and managing application state |
| **JavaScript** | Application logic and event handling |
| **Tailwind CSS** | Responsive styling and layout |
| **Vite** | Development server and build tooling |
| **Remix Icon** | Interface icons |

---

## 🧠 What You'll Learn

If you're following a React learning journey, this project is useful because it combines several fundamentals in one place.

### 1. Components

The application is separated into reusable components:

```text
src/
├── components/
│   ├── Header/
│   ├── Footer/
│   └── section/
│       └── Section.jsx
├── App.jsx
└── main.jsx
```

### 2. `useState`

State is used for the form and notes:

```jsx
const [noteTitle, setnoteTitle] = useState('')
const [noteText, setnoteText] = useState('')
const [task, setTask] = useState([])
```

This demonstrates how React state can control both user input and displayed content.

### 3. Controlled Inputs

The title and textarea are controlled by React state:

```jsx
<input
  value={noteTitle}
  onChange={(e) => setnoteTitle(e.target.value)}
/>
```

This is one of the most important patterns to understand when working with forms in React.

### 4. Form Handling

The form uses `onSubmit` and `preventDefault()`:

```jsx
const formHandler = (e) => {
  e.preventDefault()

  // add note
}
```

This prevents the browser from performing its default page reload.

### 5. Dynamic Rendering

Notes are generated from the state array:

```jsx
{task.map((elem, idx) => (
  // note card
))}
```

This is a fundamental React pattern for displaying collections of data.

### 6. Array Manipulation

The project demonstrates adding and deleting objects from an array stored in React state.

### 7. Responsive Design

Tailwind responsive utilities are used to change the layout depending on screen size.

### 8. Overflow Management

The project also demonstrates how to manage long note content and multiple note cards without breaking the layout.

---

## 🚀 Getting Started

Follow these steps if you want to run NoteNest locally and experiment with the code.

### Prerequisites

Make sure you have:

- [Node.js](https://nodejs.org/) installed
- npm installed
- A code editor such as VS Code
- A modern web browser

### 1. Clone the repository

Replace the repository URL below with the URL of this GitHub repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Then enter the project folder:

```bash
cd NoteNest
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL in your terminal, usually similar to:

```text
http://localhost:5173
```

Open that address in your browser.

### 4. Start experimenting

Try changing the application yourself.

Good beginner exercises include:

- Add note editing
- Add localStorage
- Add note search
- Add timestamps
- Add note categories
- Add dark mode
- Add form validation
- Improve the mobile layout

---

## 📂 Project Structure

```text
NoteNest/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   └── header.jsx
│   │   │
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   │
│   │   └── section/
│   │       └── Section.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🔄 How the Application Works

The basic data flow looks like this:

```text
User enters title + note
          ↓
     React state
          ↓
      Form submit
          ↓
   Create note object
          ↓
 Add object to notes array
          ↓
     Update state
          ↓
 React re-renders UI
          ↓
   New note appears
```

Deleting a note follows a similar pattern:

```text
User clicks delete
        ↓
 Identify note index
        ↓
 Create updated array
        ↓
 Update React state
        ↓
 React re-renders
        ↓
 Note disappears
```

---

## 🎯 Project Goal

The main goal of NoteNest is to practice **building instead of only watching tutorials**.

A beginner can use this project to understand the transition from:

```text
React Syntax
     ↓
React Concepts
     ↓
Small Exercises
     ↓
Complete Mini Project
     ↓
More Advanced Applications
```

The project provides a foundation for learning more advanced concepts such as APIs, backend development, databases, authentication, and persistent storage.

---

## 🗺️ Future Improvements

The current version intentionally focuses on React fundamentals.

Possible future improvements include:

- [ ] Save notes with `localStorage`
- [ ] Edit existing notes
- [ ] Search notes
- [ ] Pin important notes
- [ ] Add timestamps
- [ ] Add categories or tags
- [ ] Add form validation
- [ ] Add dark mode
- [ ] Add animations
- [ ] Add persistent database storage
- [ ] Add backend API
- [ ] Add user authentication

These features can be added progressively as you learn more frontend and full-stack concepts.

---

## 🤝 Contributing

This project is primarily a learning project, but suggestions and improvements are welcome.

If you want to experiment with the project:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Open a pull request

---

## ⭐ Learning Challenge

If you're a beginner, don't just clone this project and stop there.

Try rebuilding the application yourself.

Start with:

```text
1. Create the layout
2. Create the components
3. Add controlled inputs
4. Add useState
5. Handle form submission
6. Store notes in an array
7. Render notes with map()
8. Add delete functionality
9. Make it responsive
10. Add your own features
```

The real learning happens when you can explain **why each part works**, not when you can simply reproduce the code.

---

<div align="center">

### 📝 NoteNest

**A small React project built for learning by building.**

If this project helped you understand React, consider giving the repository a ⭐

</div>
