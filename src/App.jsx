import useGameHealth from "./hooks/useGameHealth";
import Welcome from "./components/Welcome";
import { useState } from "react";
import { gamemode } from "./data/gamedata";
import Level1 from "./components/Level1";
import Level2 from "./components/Level2";

function App() {
  const [screen, setScreen] = useState(gamemode[0]);
  const gameHealth = useGameHealth();
  
  return (
    <div>
      {/* 3. ADD HEARTS DISPLAY */}
      <div style={{
        padding: "10px", 
        marginBottom: "20px"
      }}>
        <strong>❤️ Hearts: {gameHealth.hearts}</strong> | 
      </div>
      
      {/* to be reviewed:GAME OVER CHECK */}
      {gameHealth.hearts === 0 && (
        <div style={{
          background: "red",
          color: "white",
          padding: "20px",
          textAlign: "center"
        }}>
          <h2>💀 GAME OVER - NO HEARTS LEFT!</h2>
          <button onClick={() => {
            gameHealth.resetGame();
            setScreen(gamemode[0]);
          }}>
            Restart Game
          </button>
        </div>
      )}
      
      {/* 5. Pass gameHealth to levels */}
      {screen === gamemode[0] && (
        <Welcome advance={() => {
          gameHealth.resetGame(); // Reset when starting
          setScreen(gamemode[1]);
        }} />
      )}
        
      {screen === gamemode[1] && gameHealth.hearts > 0 && (
        <Level1 
          advance={() => setScreen(gamemode[2])}
          gameHealth={gameHealth} // ← Pass hook to Level1
        />
      )}
          
      {screen === gamemode[2] && gameHealth.hearts > 0 && (
        <Level2 
          aadvnce={() => setScreen(gamemode[3])}
          gameHealth={gameHealth} // ← Pass modified hook data to Level2 from level1
        />
      )}
            
      {screen === gamemode[3] && (
        <div>
          <h1>🎉 You Win!</h1>
          <p>Final Score: {gameHealth.score}</p>
          <button onClick={() => {
            gameHealth.resetGame();
            setScreen(gamemode[0]);
          }}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
export default App;