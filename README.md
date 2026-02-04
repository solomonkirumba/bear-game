<<<<<<< HEAD
# Bear Game - React Project

## Project Overview
Interactive  game about bears built with React for final module project. Test bear knowledge across levels with health system. 
**Group:** Solomon, Brian, Maggy, Abdala  

## Submission Deliverables

### 1. GitHub Repository
**Link:** https://github.com/solomonkirumba/bear-game

### 2. Project Readme (This Document)
Includes setup instructions, custom hook breakdown, and component tree.

### 3. Live Demo
**Deployment:** https://vercel.com/solomonkirumbas-projects/bear-game/2Ek48584hdouuUq4Dwtxu7cWDTJA
**Platform:** Vercel


## Features
- Interactive bear quiz with multiple levels
- Health system (3 hearts, lose on wrong answers)
- Score tracking
- Game over mechanics
- Responsive design

## Tech Stack
- React 18
- Vite
- JavaScript ES6+
- CSS
- Git/GitHub

## Project Structure
cli-bear-game/
├── public/
│   ├── audio/           # Game audio files
│   └── vite.svg
├── src/
│   ├── App.jsx          
│   ├── App.css          
│   ├── main.jsx         
│   ├── index.css        
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── Welcome.jsx      # Landing page
│   │   ├── Level1.jsx       
│   │   ├── Level2.jsx       
│   │   ├── Level3.jsx       
│   │   ├── Level4.jsx       
│   │   ├── Level5.jsx       
│   │   ├── Level6.jsx       
│   │   ├── Level7.jsx       
│   │   ├── Level8.jsx       
│   │   ├── Level9.jsx       
│   │   ├── Level10.jsx      
│   │   ├── Gameover.jsx     # Game over screen
│   │   └── MusicPlayer.jsx  # Audio player component
│   ├── hooks/
│   │   └── useGameHealth.jsx  # Custom  hook
│   └── data/
│       └── gamedata.js        # Game questions and answers
├── package.json
├── vite.config.js
├── eslint.config.js
└── README.md

## Custom Hook: useGameHealth
```jsx
// src/hooks/useGameHealth.jsx
import { useState } from 'react';

function useGameHealth() {
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  
  const loseOneHeart = () => hearts > 0 && setHearts(hearts - 1);
  const loseAllHearts = () => setHearts(0);
  const addPoints = (points) => setScore(score + points);
  const resetGame = () => { setHearts(3); setScore(0); };
  
  return { hearts, score, loseOneHeart, loseAllHearts, addPoints, resetGame };
}
```

## Component Tree
App.jsx (Root)
├── Conditional Rendering based on game state
│   ├── Welcome.jsx (Initial screen)
│   ├── Level1.jsx → Level10.jsx (Game levels)
│   │   ├── Question display
│   │   ├── Answer buttons (4 options)
│   │   └── Result display component
│   └── Gameover.jsx (Game over screen)
├── MusicPlayer.jsx (Audio controls)
└── useGameHealth.jsx (Custom hook - global state)
    ├── hearts state
    ├── score state
    ├── loseOneHeart() function
    ├── loseAllHearts() function
    ├── addPoints() function
    └── resetGame() function

## data flow

Game Data (gamedata.js)
    ↓
App.jsx (Manages current level)
    ↓
Level Components (Level1.jsx - Level10.jsx)
    ↓ (Props)
Answer Selection → useGameHealth Hook
    ↓
State Update → App.jsx re-render
    ↓
Conditional Screen Change

## Game Logic
| Answer Type | Hearts Lost |Outcome |
|-------------|-------------|---------|
| Correct | 0  | Advance |
| Close Call | 1 | Advance | 
| Wrong | All (3) | 0 | Game Over |


## Team Roles
- **Solomon**: UI/UX, component design,
- **Brian**:  state management,testing
- **Maggy**: Game logic,  custom hooks
- **Abdala**: QA, debugging

## Future Enhancements
1. More levels and questions
2. Sound effects and animations
3. Mobile optimization