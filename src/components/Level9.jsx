import { useState } from "react";
import { level9data, ansresult, questions } from "../data/gamedata";

function Level9({ advance, gameHealth }) {
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
      <div className="level-indicator">Level 9</div>
      
      <div className="question-container">
        <h2 className="question-text">{questions.level9}</h2>
        <p className="question-hint">He's getting closer!</p>
      </div>
      
      <div className="answer-grid">
        <button 
          onClick={() => handleAnswerClick(ansresult[1], "button1")}
          className={`answer-button ${buttonColors["button1"] || ""}`}
          disabled={isAnswered}
        >
          {level9data.answer1}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button2")}
          className={`answer-button ${buttonColors["button2"] || ""}`}
          disabled={isAnswered}
        >
          {level9data.answer2}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[1], "button3")}
          className={`answer-button ${buttonColors["button3"] || ""}`}
          disabled={isAnswered}
        >
          {level9data.answer3}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button4")}
          className={`answer-button ${buttonColors["button4"] || ""}`}
          disabled={isAnswered}
        >
          {level9data.answer4}
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
        <h3 className="result-title">Almost Free! 🏃</h3>
        <p className="result-text">{level9data.outcome1 || level9data.outcome1_alt}</p>
        <button className="action-button" onClick={advance}>
          Final Level!
        </button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div className="result-container">
        <h3 className="result-title">He's Right Behind! 😱</h3>
        <p className="result-text">{level9data.outcome2}</p>
        <p style={{ color: '#f39c12', marginBottom: '1rem' }}>Lost 1 heart!</p>
        <button className="action-button" onClick={advance}>
          Final Level!
        </button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div className="result-container game-over">
        <h3 className="result-title">Too Slow! 💀</h3>
        <p className="result-text">{level9data.outcome3}</p>
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

export default Level9;