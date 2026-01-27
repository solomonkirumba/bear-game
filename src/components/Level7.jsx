import { useState } from "react";
import { level7data, ansresult, questions } from "../data/gamedata";

function Level7({ advance, gameHealth }) {
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
    
    if (result === ansresult[1]) { // Correct
      newColors[buttonId] = "correct";
    } 
    else if (result === ansresult[2]) { // Close call
      newColors[buttonId] = "close-call";
    }
    else if (result === ansresult[3]) { // Wrong
      newColors[buttonId] = "wrong";
    }
    
    setButtonColors(newColors);
    
    if (result === ansresult[1]) {
      // Correct - no effect
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
      <div className="level-indicator">Level 7</div>
      
      <div className="question-container">
        <h2 className="question-text">{questions.level7}</h2>
        <p className="question-hint">Into the unknown...</p>
      </div>
      
      <div className="answer-grid">
        <button 
          onClick={() => handleAnswerClick(ansresult[1], "button1")}
          className={`answer-button ${buttonColors["button1"] || ""}`}
          disabled={isAnswered}
        >
          {level7data.answer1}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button2")}
          className={`answer-button ${buttonColors["button2"] || ""}`}
          disabled={isAnswered}
        >
          {level7data.answer2}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button3")}
          className={`answer-button ${buttonColors["button3"] || ""}`}
          disabled={isAnswered}
        >
          {level7data.answer3}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button4")}
          className={`answer-button ${buttonColors["button4"] || ""}`}
          disabled={isAnswered}
        >
          {level7data.answer4}
        </button>
      </div>
      
      {isAnswered && (
        <Result answerstate={answerstate} advance={advance} />
      )}
    </div>
  );
}

function Result({ answerstate, advance }) {
  if (answerstate === ansresult[1]) {
    return (
      <div className="result-container">
        <h3 className="result-title">Courageous! 🕯️</h3>
        <p className="result-text">{level7data.outcome1}</p>
        <button className="action-button" onClick={advance}>
          Continue to Level 8
        </button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div className="result-container">
        <h3 className="result-title">He's Coming! 😰</h3>
        <p className="result-text">{level7data.outcome2 || level7data.outcome2_alt}</p>
        <p style={{ color: '#f39c12', marginBottom: '1rem' }}>Lost 1 heart!</p>
        <button className="action-button" onClick={advance}>
          Continue to Level 8
        </button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div className="result-container game-over">
        <h3 className="result-title">Dead End! 💀</h3>
        <p className="result-text">{level7data.outcome3}</p>
        <p style={{ color: '#e74c3c', marginBottom: '1rem' }}>Lost all hearts!</p>
      </div>
    );
  } else {
    return null;
  }
}

export default Level7;