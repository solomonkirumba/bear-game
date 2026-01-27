import { useState } from "react";
import { level10data, ansresult, questions } from "../data/gamedata";

function Level10({ advance, gameHealth }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonColors, setButtonColors] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleAnswerClick = (result, buttonId) => {
    if (isAnswered) return;
    
    setIsAnswered(true);
    setAnswerState(result);
    setSelectedButton(buttonId);
    
    const newColors = {};
    
    if (result === "win") { // Special win condition
      newColors[buttonId] = "correct";
    } 
    else if (result === ansresult[2]) { // Close call
      newColors[buttonId] = "close-call";
    }
    else if (result === ansresult[3]) { // Wrong
      newColors[buttonId] = "wrong";
    }
    
    setButtonColors(newColors);
    
    if (result === "win") {
      // Win - no effect
    } 
    else if (result === ansresult[2]) {
      gameHealth.loseOneHeart();
    }
    else if (result === ansresult[3]) {
      gameHealth.loseAllHearts();
    }
  };

  return (
    <div className="game-container">
      <div className="level-indicator">Final Level</div>
      
      <div className="question-container">
        <h2 className="question-text">{questions.level10}</h2>
        <p className="question-hint">FINAL CHOICE - MAKE IT COUNT!</p>
      </div>
      
      <div className="answer-grid">
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button1")}
          className={`answer-button ${buttonColors["button1"] || ""}`}
          disabled={isAnswered}
        >
          {level10data.answer1}
        </button>
        
        <button 
          onClick={() => handleAnswerClick("win", "button2")}
          className={`answer-button ${buttonColors["button2"] || ""}`}
          disabled={isAnswered}
        >
          {level10data.answer2}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button3")}
          className={`answer-button ${buttonColors["button3"] || ""}`}
          disabled={isAnswered}
        >
          {level10data.answer3}
        </button>
        
        <button 
          onClick={() => handleAnswerClick("win", "button4")}
          className={`answer-button ${buttonColors["button4"] || ""}`}
          disabled={isAnswered}
        >
          {level10data.answer4}
        </button>
      </div>
      
      {isAnswered && (
        <Result answerstate={answerstate} advance={advance} />
      )}
    </div>
  );
}

function Result({ answerstate, advance }) {
  if (answerstate === "win") {
    return (
      <div className="result-container game-win">
        <h3 className="result-title">YOU ESCAPED! 🎉🏆</h3>
        <p className="result-text">{level10data.win}</p>
        <p style={{ color: '#2ecc71', fontSize: '1.3rem', marginBottom: '1.5rem' }}>
          You survived the bear's house!
        </p>
        <button className="action-button" onClick={advance}>
          Play Again?
        </button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div className="result-container">
        <h3 className="result-title">He's Still Chasing! 🐻</h3>
        <p className="result-text">{level10data.outcome1}</p>
        <p style={{ color: '#f39c12', marginBottom: '1rem' }}>Lost 1 heart!</p>
        <button className="action-button" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div className="result-container game-over">
        <h3 className="result-title">So Close Yet So Far! 💀</h3>
        <p className="result-text">{level10data.outcome3}</p>
        <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>Lost all hearts!</p>
       <button 
          className="action-button" 
          onClick={() => window.location.reload()}
          id="level3-restart-btn"
        >
          Start Over
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level10;