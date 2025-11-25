# Pokedex App

## Description
The **Pokedex App** is a full-stack application built with **Node.js (backend) and **React (frontend)**.  
It allows users to search for Pokémon by name and displays rich information, including:

- Multiple sprites (front, back, shiny)  
- Height & Weight  
- Types  
- Abilities  
- Stats (HP, Attack, Defense, etc.)  

The backend caches API responses for faster repeated searches.

---

## Features

- Search for any Pokémon by name  
- Display multiple sprites  
- Show detailed stats and abilities  
- Backend caching for improved performance  
- Responsive and clean UI  

---

## Technologies Used

**Backend:** Node.js, Express.js, Axios, LRU-Cache, Node-Cache  
**Frontend:** React.js, Axios, CSS  
**API:** [PokeAPI](https://pokeapi.co/)  

---

## Folder Structure

pokedex-app/
├─ backend/
│ ├─ server.js
│ ├─ package.json
├─ frontend/
│ ├─ src/
│ │ ├─ App.js
│ │ └─ App.css
│ ├─ package.json
└─ README.md



---

## How to Run the Project

### 1. Backend

Open a terminal:

```bash
cd backend
npm install
npm run dev
```
Backend runs on http://localhost:3000

API endpoint: /pokemon/:name

### 2. Frontend

Open a **new terminal**:

```bash
cd frontend
npm install
npm start
```

Frontend runs (likely) on http://localhost:3001

Enter a Pokémon name and click Search


