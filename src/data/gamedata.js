const gamemode = ["start", "level1", "level2", "level3", "level4", "level5", "level6", "level7", "level8", "level9", "level10", "gameover", "win"];
const ansresult = [null, "correct", "closecall", "died"];

// Level 1-3: Inside the bear's house, suspicion grows
const level1data = {
    answer1: "leave and run quickly",
    answer2: "politely obey and enter",
    answer3: "attack the bear",
    answer4: "make an excuse to leave",
    outcome1: "You chose to listen to him. You survived but now you're inside...",
    outcome3: "He got really angry and tore you apart. Game over!",
    outcome2: "You entered cautiously. The door closes behind you.",
};

const level2data = {
    answer1: "accept his smelly soup and eat",
    answer2: "politely refuse (you're not hungry)",
    answer3: "strongly decline and look for exits",
    answer4: "try to make a run for the door",
    outcome1: "The soup was rotten and poisoned. Game over!",
    outcome2: "He respected your decision but watches you closely.",
    outcome3: "He blocked the door. 'Where do you think you're going?' Game over!",
};

const level3data = {
    answer1: "Take all the honey and run",
    answer2: "Politely take a small jar",
    answer3: "Refuse and ask to leave",
    answer4: "Distract him and check the windows",
    outcome1: "He caught you stealing. Game over!",
    outcome2: "He seems pleased but you notice chains on the wall...",
    outcome3: "'Leaving so soon?' he growls. Game over!",
    outcome2_alt: "He's getting suspicious of you."
};

// Level 4-6: Realization of danger, planning escape
const level4data = {
    answer1: "Panic and scream for help",
    answer2: "Calmly ask to use the bathroom",
    answer3: "Try to overpower him",
    answer4: "Pretend to feel sick",
    outcome1: "He covers your mouth. 'Quiet now.' Game over!",
    outcome2: "He shows you to a small room. You find a rusty key!",
    outcome3: "He's three times your size. Game over!",
    outcome2_alt: "You have a key but don't know what it opens."
};

const level5data = {
    answer1: "Try the key on the front door",
    answer2: "Wait for him to fall asleep",
    answer3: "Ask about the chains casually",
    answer4: "Look for other keys or tools",
    outcome1: "Wrong key. He hears you fumbling. Game over!",
    outcome2: "You hear snoring. This might be your chance...",
    outcome3: "'Those? For... guests who overstay.' Game over!",
    outcome2_alt: "He's asleep but lightly."
};

const level6data = {
    answer1: "Sneak to the front door",
    answer2: "Search for basement/cellar door",
    answer3: "Take a kitchen knife as weapon",
    answer4: "Check the windows for escape",
    outcome1: "The door creaks loudly! He wakes up. Game over!",
    outcome2: "You find a locked cellar door. The key fits!",
    outcome3: "The knife slips and clatters. Game over!",
    outcome2_alt: "The cellar might have another way out."
};

// Level 7-8: Escape through the cellar, discovery
const level7data = {
  
};

const level8data = {
    answer1: "Light a match (risk being seen)",
    answer2: "Feel your way in the dark",
    answer3: "Call out for help",
    answer4: "Wait for your eyes to adjust",
    outcome1: "The match reveals horrible things... but also a tunnel!",
    outcome3: "He hears you! Game over!",
    outcome2: "You stumble but find an old mining tunnel entrance.",
    outcome1_alt: "The tunnel seems to lead outside."
};

// Level 9-10: Final escape, tense chase
const level9data = {
    answer1: "Run straight through the tunnel",
    answer2: "Move quietly and listen",
    answer3: "Set a trap behind you",
    answer4: "Go back for a weapon first",
    outcome1: "You run but he's close behind!",
    outcome2: "You hear heavy footsteps following...",
    outcome3: "You rig a bear trap. It might slow him down!",
    outcome1_alt: "Light at the end of the tunnel!",
    outcome3_alt: "You hear a satisfying SNAP behind you."
};

const level10data = {
    answer1: "Sprint for the forest",
    answer2: "Hide in nearby bushes",
    answer3: "Climb a tall tree",
    answer4: "Cross the river ahead",
    outcome1: "You reach the forest edge! But he's still chasing...",
    outcome2: "He sniffs around but passes by! Almost safe...",
    outcome3: "Bears climb trees too. Game over!",
    outcome4: "The current is strong but you make it across! He won't follow.",
    win: "You made it! You escaped the bear's house!",
};

const questions = {
    setting: "Lost in a dark forest, you stumble upon an old cabin. Desperate for help, you knock...",
    level1: "A REAL BEAR in overalls opens the door. 'Come in, traveler! I have honey!' What do you do?",
    level2: "Inside, it smells... odd. He offers you murky soup. 'Eat, you look hungry!' What now?",
    level3: "After the meal, he shows you jars of golden honey. 'Take some for your journey!'",
    level4: "You notice shackles on the wall. Photos of previous 'guests'... This is bad. Act normal.",
    level5: "He's nodding off in his chair. The key you found burns in your pocket. Time to plan.",
    level6: "He's asleep! The chains on the wall glint in the firelight. You need to escape NOW.",
    level7: "The cellar door opens with your key! Stairs descend into pitch black. Do you go down?",
    level8: "Complete darkness. You can hear him upstairs, searching. He knows you're gone.",
    level9: "A narrow tunnel! It smells of earth and freedom. But you hear lumbering behind you...",
    level10: "YOU SEE DAYLIGHT! The tunnel exit! But he's right behind you. FINAL ESCAPE ATTEMPT!",
};

// Additional data for game progression
const storyProgress = {
    level1: { mood: "suspicious", location: "outside cabin", danger: "low" },
    level2: { mood: "uneasy", location: "inside cabin", danger: "medium" },
    level3: { mood: "anxious", location: "cabin main room", danger: "medium" },
    level4: { mood: "terrified", location: "cabin interior", danger: "high" },
    level5: { mood: "panicked", location: "cabin at night", danger: "very high" },
    level6: { mood: "desperate", location: "cabin escape", danger: "extreme" },
    level7: { mood: "hopeful", location: "cellar entrance", danger: "extreme" },
    level8: { mood: "fearful", location: "dark cellar", danger: "critical" },
    level9: { mood: "determined", location: "escape tunnel", danger: "critical" },
    level10: { mood: "desperate", location: "forest edge", danger: "final" },
};

export { gamemode, level1data, level2data, level3data, level4data, level5data, level6data, level7data, level8data, level9data, level10data, questions, ansresult, storyProgress };