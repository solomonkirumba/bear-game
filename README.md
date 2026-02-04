## 1. Bear Game
A choice-based survival adventure built with React. You are trapped in a bear's house and must navigate 10 levels of increasingly difficult situations. One wrong move leads to an immediate game over.

## 2. Setup and Installation
To get started:

1. **Install dependencies:**
	- `npm install`
2. **Launch the game:**
	- `npm run dev`
3. **Run the test suite:**
	- `npm test`

## 3. Component Tree
Everything is managed by `App.jsx`, which acts as the central controller for navigation and state.

- **App.jsx** (The Controller)
- **MusicPlayer.jsx** (Persistent background audio)
- **Welcome.jsx** (Landing screen)
- **Levels 1-10** (Core gameplay components)
- **GameOver.jsx** (Triggered when health reaches 0)

## 4. Custom Hooks
### useGameHealth
This is the only custom hook in the project. It tracks player health across the entire application so that progress and mistakes persist between levels.

- `hearts`: Current health count (starts at 3)
- `loseOneHeart()`: Used for "close call" answers
- `loseAllHearts()`: Used for fatal mistakes
- `resetGame()`: Clears health state for a new game
![Component Tree Diagram](./component-tree.png)

## 5. Project Structure
- `src/components/`: All UI screens and gameplay level files
- `src/hooks/`: Location of the useGameHealth logic
- `src/data/`: `gamedata.js` contains the story text, questions, and outcome logic
- `src/tests/`: Vitest files for checking level transitions and health mechanics
- `public/audio/`: Background music files

## 6. Gameplay Logic
- **Perfect Choice:** Advance to the next level with no penalty
- **Close Call:** Advance to the next level but lose 1 Heart
- **Deadly Choice:** Immediate drop to 0 Hearts and Game Over
- **Winning:** Successfully complete Level 10 with at least 1 Heart remaining

---
