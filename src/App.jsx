import { useState } from "react";
import useGameHealth from "./hooks/useGameHealth";
import Welcome from "./components/Welcome";
import { gamemode } from "./data/gamedata";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";
import Level3 from "./components/Level3";
import Level4 from "./components/Level4";
import Level5 from "./components/Level5";
import Level6 from "./components/Level6";
import Level7 from "./components/Level7";
import Level8 from "./components/Level8";
import Level9 from "./components/Level9";
import Level10 from "./components/Level10";
import MusicPlayer from "./components/MusicPlayer"; // <-- ADD THIS IMPORT

function App() {
  const [screen, setScreen] = useState(gamemode[0]);
  const gameHealth = useGameHealth();
  
  return (
    <div className="App">
      {/* ADD MUSIC PLAYER HERE - It floats in corner */}
      <MusicPlayer /> {/* <-- ADD THIS LINE */}
      
      {/* Hearts Display - Only show when not on start screen */}
      {screen !== "start" && screen !== "gameover" && gameHealth.hearts > 0 && (
        <div className="heart-container">
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`heart ${i >= gameHealth.hearts ? 'lost' : ''}`}>
              ❤️
            </span>
          ))}
        </div>
      )}
      
      {/* Game Screens */}
      {screen === "start" && (
        <Welcome advance={() => {
          gameHealth.resetGame(); // Reset when starting
          setScreen("level1");
        }} />
      )}
      
      {/* ALL YOUR EXISTING LEVELS STAY EXACTLY THE SAME */}
      {screen === "level1" && (
        <Level1 
          advance={() => setScreen("level2")}
          gameHealth={gameHealth}
        />
      )}
      
   {screen === "level2"  && (
        <Level2 
          advance={() => setScreen("level3")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level3" && (
        <Level3 
          advance={() => setScreen("level4")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level4" && (
        <Level4 
          advance={() => setScreen("level5")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level5" && (
        <Level5 
          advance={() => setScreen("level6")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level6" && (
        <Level6 
          advance={() => setScreen("level7")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level7" &&  (
        <Level7 
          advance={() => setScreen("level8")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level8" && (
        <Level8 
          advance={() => setScreen("level9")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level9" && (
        <Level9 
          advance={() => setScreen("level10")}
          gameHealth={gameHealth}
        />
      )}
      
      {screen === "level10" && (
        <Level10 
          advance={() => {
            gameHealth.resetGame();
            setScreen("start");
          }}
          gameHealth={gameHealth}
        />
      )}
      
   
      {/* Win Screen - Only if you reach the end */}
      {screen === "win" && (
        <div className="game-container">
          <div className="game-header">
            <h1 className="game-title" style={{ color: '#2ecc71' }}>VICTORY! 🏆</h1>
            <div className="game-subtitle">You escaped the bear's house!</div>
          </div>
          
          <div className="question-container" style={{ borderColor: '#2ecc71' }}>
            <div style={{ fontSize: '6rem', margin: '2rem 0' }}>🎉</div>
            <h2 className="question-text">Congratulations! You made it out alive!</h2>
            <p className="question-hint">Final Hearts: {gameHealth.hearts}</p>
          </div>
          
          <div className="result-container game-win">
            <h3 className="result-title">Adventure Complete!</h3>
            <p style={{ color: '#f1f2f6', margin: '1.5rem 0', fontSize: '1.1rem' }}>
              You successfully navigated through all 10 levels and escaped the bear's house.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
              <button className="action-button" onClick={() => {
                gameHealth.resetGame();
                setScreen("start");
              }}>
                PLAY AGAIN
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;