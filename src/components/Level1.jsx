// Level1
import { level1data, questions, ansresult } from "../data/gamedata";
import { useState } from "react";

function Level1({ advance, gameHealth }) {
  const [answerstate, setAnswerState] = useState(ansresult[0]);
  const [selectedButton, setSelectedButton] = useState(null);
  const [buttonColors, setButtonColors] = useState({});
  const [isAnswered, setIsAnswered] = useState(false); // New state to track if answered
  
  const handleAnswerClick = (result, buttonId) => {
    // Prevent multiple clicks if already answered
    if (isAnswered) return;
    
    setIsAnswered(true);
    setAnswerState(result);
    setSelectedButton(buttonId);
    
    // Set button colors based on answer type
    const newColors = {};
    
    // Set color for the clicked button
    if (result === ansresult[1]) { // Correct
      newColors[buttonId] = "green";
    } 
    else if (result === ansresult[2]) { // Close call
      newColors[buttonId] = "orange";
    }
    else if (result === ansresult[3]) { // Wrong
      newColors[buttonId] = "red";
    }
    
    setButtonColors(newColors);
    
    // Apply heart effects HERE
    if (result === ansresult[1]) {
      // Correct - do nothing
    } 
    else if (result === ansresult[2]) {
      // Close call - lose 1 heart
      gameHealth.loseOneHeart();
    }
    else if (result === ansresult[3]) {
      // Wrong - lose all hearts
      gameHealth.loseAllHearts();
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
      <h2>{questions.level1}</h2>
      {/*Ive added those tags so you guys understand the logic better,
      close calls mean they lose a heart wrong answers mean they lose all the hearts 
      while correct ones allow procedure*/}
      <button 
        onClick={() => handleAnswerClick(ansresult[3], "button1")}
        style={getButtonStyle("button1")}
        disabled={isAnswered} // Disable button after answer
      >
        {level1data.answer1} (Wrong)
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[1], "button2")}
        style={getButtonStyle("button2")}
        disabled={isAnswered} // Disable button after answer
      >
        {level1data.answer2} (Correct)
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[3], "button3")}
        style={getButtonStyle("button3")}
        disabled={isAnswered} // Disable button after answer
      >
        {level1data.answer3} (Wrong)
      </button>
      <button 
        onClick={() => handleAnswerClick(ansresult[2], "button4")}
        style={getButtonStyle("button4")}
        disabled={isAnswered} // Disable button after answer
      >
        {level1data.answer4} (Close Call)
      </button>
      
      <Result answerstate={answerstate} advance={advance} isAnswered={isAnswered} />
    </div>
  );
}

function Result({ answerstate, advance, isAnswered, gameHealth}) {
  // Only show result if an answer has been selected
  if (!isAnswered) return null;
  
  // NO heart functions here!
  if (answerstate === ansresult[1]) {
    return (
      <div>
        <h3>{level1data.outcome1}</h3>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[2]) {
    return (
      <div>
        <h3>{level1data.outcome2}</h3>
        <p>⚠️ Lost 1 heart!</p>
        <button onClick={advance}>Proceed to Level 2</button>
      </div>
    );
  } else if (answerstate === ansresult[3]) {
    console.log("reached")
    return (
      <div>
        <h3>{level1data.outcome3}</h3>
        <p>💀 Lost all hearts!</p>
        <button onClick={() => {
            {props.gameHealth.resetGame()};
          }}>
            Restart Game
          </button>
      </div>
    );
  } else {
    return null;
  }
}

export default Level1;