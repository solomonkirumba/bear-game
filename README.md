# Bear Game

A small browser-based JavaScript game where the player guides a bear through simple choices and levels. This README replaces the previous TODO-style notes with a clear project overview, setup instructions, gameplay guide, and a prioritized list of tasks and known issues.

## Table of contents
- [About](#about)
- [Demo / Preview](#demo--preview)
- [Features](#features)
- [Getting started](#getting-started)
- [How to play](#how-to-play)
- [Project structure (high level)](#project-structure-high-level)
- [Development notes & common tasks](#development-notes--common-tasks)
- [Known issues & TODOs (prioritized)](#known-issues--todos-prioritized)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## About
Bear Game is a lightweight educational/experimental web game written primarily in JavaScript and CSS. The gameplay is choice-driven and level-based. The project is ideal for practicing DOM manipulation, simple game state management, and routing between small pages/components.

## Demo / Preview
Open the project in a browser (see Getting started). Screenshots or a short GIF would be useful here — consider adding them to the repo's README later.

## Features
- Multiple levels (level data is stored in code)
- Choice-based interaction
- Simple UI with CSS-styled buttons
- Intent to support color-coded buttons and tracking hearts / lives

## Getting started

Prerequisites
- Modern browser (Chrome, Firefox, Edge)
- Node.js + npm (only required if the project uses a dev server or build tools)

Quick start (two common options)

1) Open locally (no build)
- Clone the repo:
  git clone https://github.com/solomonkirumba/bear-game.git
- Open `index.html` (or the appropriate start HTML file) in your browser.

2) Run with a simple local server (recommended for proper routing)
- If the repo contains a package.json with scripts:
  npm install
  npm start
- Or use a lightweight server:
  npx http-server . -c-1
  Then open http://localhost:8080 (port depends on server)

If you want, tell me whether this repo uses a framework or has a package.json and I can add exact commands.

## How to play
- Objective: progress through levels by choosing actions that keep the bear safe and reach the level goal.
- Controls: click/tap choice buttons.
- Lives/Hearts: the player has hearts representing lives (note: hearts behavior currently needs fix — see Known issues).
- Rules:
  - Each choice should only be selectable once per run (this is a planned rule to prevent repeating the same option).
  - Levels progress as the user meets conditions defined in level data.

Consider adding an explicit in-game "How to play" page for first-time users (planned).

## Project structure (high level)
(Adjust paths to match this repo — update if files differ.)
- index.html — entry page / start menu
- /src or /js — game logic (levels, UI, event handlers)
- /components — reusable pieces (Start, Level, GameOver)
- /css — styles
- /assets — images, sounds

## Development notes & common tasks
- Level data: levels are represented as data objects; to add a new level, duplicate a level's data and adjust content.
- Routing: the start page should route to Level, About, and How to Play pages (three-way routing goal).
- UI: work to make buttons look consistent across levels (colors, disabled states).
- State: centralize game state (current level, choices made, hearts/lives) in one object to simplify saving/restarting.

## Known issues & TODOs (prioritized)
High priority
1. Prevent a user from choosing the same option more than once per level/run.
2. Fix hearts/lives logic (hearts aren't updating correctly after the last commit).
3. Implement GAME OVER screen/component and hook it into level completion / lives depletion.

Medium priority
4. Fix Level 1 restart button behavior and ensure restart works consistently across all levels.
5. Implement color buttons beyond level 2 (buttons should show correct colors and behavior for later levels).

Low priority / UX
6. Improve UI across all pages (start, levels, game over).
7. Add "About" and "How to play" pages, reachable from the start page.
8. Add documentation comments to major functions and describe level data format.

Notes for implementers
- When changing UI state for buttons, ensure buttons are disabled (or given a "selected" state) after being chosen, to implement "only choose once".
- Centralize level progression so duplication of logic across levels is minimized — prefer configurable level data.

## Contributing
Thanks for your interest! Suggested workflow:
1. Fork the repo.
2. Create a branch for your feature or bugfix: git checkout -b fix/hearts-logic
3. Make changes and test locally.
4. Open a pull request describing the change and which TODO it addresses.

Please include brief tests or a test plan for behaviour changes (e.g., steps to reproduce the bug and how you verified the fix).

## License
No license file present in the repository. If you want this project to be open-source, consider adding a LICENSE (MIT is a common choice). I can add a LICENSE file if you tell me which license you'd like.

## Contact
Author: @solomonkirumba — https://github.com/solomonkirumba
