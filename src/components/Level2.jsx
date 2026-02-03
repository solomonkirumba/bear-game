import { useState } from "react";
import { level2data, ansresult, questions } from "../data/gamedata";

function Level2({ advance, gameHealth }) {
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
    
    // Set CSS class names instead of inline colors
    if (result === ansresult[1]) { // Wrong
      newColors[buttonId] = "wrong";
    } 
    else if (result === ansresult[2]) { // Correct
      newColors[buttonId] = "correct";
    }
    else if (result === ansresult[3]) { // Close call
      newColors[buttonId] = "close-call";
    }
    
    setButtonColors(newColors);
    
    if (result === ansresult[1]) {
      gameHealth.loseAllHearts();
    } 
    else if (result === ansresult[2]) {
      // Correct answer - no effect
    }
    else if (result === ansresult[3]) {
      gameHealth.loseOneHeart();
    }
  };

  const getButtonStyle = (buttonId) => {
    const baseStyle = {
      cursor: isAnswered ? "not-allowed" : "pointer",
      opacity: isAnswered ? 0.7 : 1
    };
    return baseStyle;
  };

  return (
    <div className="game-container" id="level2-screen">
      <div className="level-indicator" id="level2-indicator">Level 2</div>
      
      <div className="question-container" id="level2-question">
        <h2 className="question-text" id="level2-question-text">{questions.level2}</h2>
        <p className="question-hint" id="level2-hint">The bear seems friendly... but trust your instincts.</p>
      </div>
      
      <div className="answer-grid" id="level2-answers">
        <button 
          onClick={() => handleAnswerClick(ansresult[1], "button1")}
          className={`answer-button ${buttonColors["button1"] || ""}`}
          style={getButtonStyle("button1")}
          disabled={isAnswered}
          id="level2-option1"
        >
          {level2data.answer1}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button2")}
          className={`answer-button ${buttonColors["button2"] || ""}`}
          style={getButtonStyle("button2")}
          disabled={isAnswered}
          id="level2-option2"
        >
          {level2data.answer2}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button3")}
          className={`answer-button ${buttonColors["button3"] || ""}`}
          style={getButtonStyle("button3")}
          disabled={isAnswered}
          id="level2-option3"
        >
          {level2data.answer3}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button4")}
          className={`answer-button ${buttonColors["button4"] || ""}`}
          style={getButtonStyle("button4")}
          disabled={isAnswered}
          id="level2-option4"
        >
          {level2data.answer4}
        </button>
      </div>
      
      <Result 
        answerstate={answerstate} 
        advance={advance} 
        isAnswered={isAnswered}
        gameHealth={gameHealth}
      />
    </div>
  );
}

function Result({ answerstate, advance, isAnswered, gameHealth }) {
  if (!isAnswered) return null;
  
  if (answerstate === ansresult[1]) {
    return (
      <div className="result-container game-over" id="level2-result-wrong">
        <h3 className="result-title">Game Over! 💀</h3>
        <p className="result-text">{level2data.outcome1}</p>
        <p className="heart-loss-warning">Lost all hearts!</p>
        <button 
          className="action-button" 
          onClick={() => window.location.reload()}
          id="level2-restart-btn"
        >
          Start Over
        </button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div className="result-container" id="level2-result-correct">
        <h3 className="result-title">Good Instincts! 🎯</h3>
        <p className="result-text">{level2data.outcome2}</p>
        <button className="action-button" onClick={advance} id="level2-proceed-btn">
          Proceed to Level 3
        </button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div className="result-container" id="level2-result-close">
        <h3 className="result-title">That Was Close! 😅</h3>
        <p className="result-text">{level2data.outcome3}</p>
        <p className="heart-loss-warning">Lost 1 heart!</p>
        <button className="action-button" onClick={advance} id="level2-continue-btn">
          Continue to Level 3
        </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level2;