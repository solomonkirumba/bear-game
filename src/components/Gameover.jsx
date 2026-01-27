function GameOver({ restart }) {
  return (
    <div className="game-container">
      <div className="game-header">
        <h1 className="game-title" style={{ color: '#e74c3c' }}>GAME OVER</h1>
        <div className="game-subtitle">The bear was not pleased...</div>
      </div>
      
      <div className="question-container" style={{ borderColor: '#e74c3c' }}>
        <div style={{ fontSize: '6rem', margin: '2rem 0' }}>💀</div>
        <h2 className="question-text">You didn't make it out of the bear's house</h2>
        <p className="question-hint">Better luck next time!</p>
      </div>
      
      <div className="result-container game-over">
        <h3 className="result-title">What went wrong?</h3>
        <ul style={{ textAlign: 'left', color: '#f1f2f6', margin: '1.5rem 0', fontSize: '1.1rem' }}>
          <li>Trusted the bear too much</li>
          <li>Didn't notice the warning signs</li>
          <li>Made too much noise</li>
          <li>Chose the wrong escape route</li>
        </ul>
        
        <div style={{ marginTop: '2rem' }}>
          <button className="action-button" onClick={restart}>
            TRY AGAIN
          </button>
        </div>
        
        <div style={{ marginTop: '2rem', color: '#a0b3c6', fontSize: '0.9rem' }}>
          <p>Tip: Look for clues in each level. Some answers are safer than others!</p>
        </div>
      </div>
    </div>
  );
}

export default GameOver;