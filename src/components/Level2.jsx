import { useState } from "react";
import { level2data, ansresult, questions } from "../data/gamedata";

function Level2({ advance, gameHealth }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonColors, setButtonColors] = useState({});
  const [isAnswered, setIsAnswered] = useState(false);
  
  const handleAnswerClick = (result, buttonId) => {
    // Prevent multiple clicks if already answered
    if (isAnswered) return;
    
    setIsAnswered(true);
    setAnswerState(result);
    setSelectedButton(buttonId);
    
    // Set button colors based on answer type
    const newColors = {};
    
    // Set color for the clicked button
    if (result === ansresult[1]) { // Wrong
      newColors[buttonId] = "red";
    } 
    else if (result === ansresult[2]) { // Correct
      newColors[buttonId] = "green";
    }
    else if (result === ansresult[3]) { // Close call
      newColors[buttonId] = "orange";
    }
    
    setButtonColors(newColors);
    
    // Apply heart effects
    if (result === ansresult[1]) {
      // Wrong answer - lose all hearts
      gameHealth.loseAllHearts();
    } 
    else if (result === ansresult[2]) {
      // Correct answer - no effect
    }
    else if (result === ansresult[3]) {
      // Close call - lose 1 heart
      gameHealth.loseOneHeart();
    }
  };

  // Helper function to get button style
  const getButtonStyle = (buttonId) => {
    const baseStyle = {
      cursor: isAnswered ? "not-allowed" : "pointer",
      opacity: isAnswered ? 0.7 : 1
    };
    
    if (buttonColors[buttonId]) {
      return {
        ...baseStyle,
        backgroundColor: buttonColors[buttonId],
        color: "white",
        border: `2px solid ${buttonColors[buttonId]}`,
        transform: "scale(0.98)"
      };
    }
    return baseStyle;
  };

  return (
    <div>
      <h2>{questions.level2}</h2>
      
      <button 
        onClick={() => handleAnswerClick(ansresult[1], "button1")}
        style={getButtonStyle("button1")}
        disabled={isAnswered}
      >
        {level2data.answer1}
      </button>
      
      <button 
        onClick={() => handleAnswerClick(ansresult[2], "button2")}
        style={getButtonStyle("button2")}
        disabled={isAnswered}
      >
        {level2data.answer2}
      </button>
      
      <button 
        onClick={() => handleAnswerClick(ansresult[2], "button3")}
        style={getButtonStyle("button3")}
        disabled={isAnswered}
      >
        {level2data.answer3}
      </button>
      
      <button 
        onClick={() => handleAnswerClick(ansresult[3], "button4")}
        style={getButtonStyle("button4")}
        disabled={isAnswered}
      >
        {level2data.answer4}
      </button>
      
      <Result answerstate={answerstate} advance={advance} isAnswered={isAnswered} />
    </div>
  );
}

function Result({ answerstate, advance, isAnswered }) {
  // Only show result if an answer has been selected
  if (!isAnswered) return null;
  
  if (answerstate === ansresult[1]) {
    return (
      <div>
        <p>💀 Lost all hearts!
            {level2data.outcome1}
        </p>
        {/* Game over will show from App.jsx */}
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div>
        <h3>{level2data.outcome2}</h3>
        <button onClick={advance}>Proceed to Level 3</button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    return (
      <div>
        <h3>{level2data.outcome3}</h3>
        <p>⚠️ Lost 1 heart!</p>
        <button onClick={advance}>Proceed to Level 3</button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level2;