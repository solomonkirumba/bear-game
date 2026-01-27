import { useState } from "react";
import { level3data, ansresult, questions } from "../data/gamedata";

function Level3({ advance, gameHealth }) {
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

  const getButtonStyle = (buttonId) => {
    const baseStyle = {
      cursor: isAnswered ? "not-allowed" : "pointer",
      opacity: isAnswered ? 0.7 : 1
    };
    return baseStyle;
  };

  return (
    <div className="game-container" id="level3-screen">
      <div className="level-indicator" id="level3-indicator">Level 3</div>
      
      <div className="question-container" id="level3-question">
        <h2 className="question-text" id="level3-question-text">{questions.level3}</h2>
        <p className="question-hint" id="level3-hint">The honey looks tempting... but remember where you are.</p>
      </div>
      
      <div className="answer-grid" id="level3-answers">
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button1")}
          className={`answer-button ${buttonColors["button1"] || ""}`}
          style={getButtonStyle("button1")}
          disabled={isAnswered}
          id="level3-option1"
        >
          {level3data.answer1}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[1], "button2")}
          className={`answer-button ${buttonColors["button2"] || ""}`}
          style={getButtonStyle("button2")}
          disabled={isAnswered}
          id="level3-option2"
        >
          {level3data.answer2}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[3], "button3")}
          className={`answer-button ${buttonColors["button3"] || ""}`}
          style={getButtonStyle("button3")}
          disabled={isAnswered}
          id="level3-option3"
        >
          {level3data.answer3}
        </button>
        
        <button 
          onClick={() => handleAnswerClick(ansresult[2], "button4")}
          className={`answer-button ${buttonColors["button4"] || ""}`}
          style={getButtonStyle("button4")}
          disabled={isAnswered}
          id="level3-option4"
        >
          {level3data.answer4}
        </button>
      </div>
      
      {isAnswered && (
        <Result answerstate={answerstate} advance={advance} gameHealth={gameHealth} />
      )}
    </div>
  );
}

function Result({ answerstate, advance, gameHealth }) {
  if (answerstate === ansresult[1]) {
    return (
      <div className="result-container" id="level3-result-correct">
        <h3 className="result-title">Good Choice! 🍯</h3>
        <p className="result-text">{level3data.outcome2}</p>
        <button className="action-button" onClick={advance} id="level3-proceed-btn">
          Continue to Level 4
        </button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div className="result-container" id="level3-result-close">
        <h3 className="result-title">Close One! 👀</h3>
        <p className="result-text">{level3data.outcome2_alt}</p>
        <p className="heart-loss-warning">Lost 1 heart!</p>
        <button className="action-button" onClick={advance} id="level3-continue-btn">
          Continue to Level 4
        </button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div className="result-container game-over" id="level3-result-wrong">
        <h3 className="result-title">Too Greedy! 💀</h3>
        <p className="result-text">{level3data.outcome1}</p>
        <p className="heart-loss-warning">Lost all hearts!</p>
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

export default Level3;