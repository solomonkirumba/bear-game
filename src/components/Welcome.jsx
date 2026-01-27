function Welcome(props) {
  return (
    <div className="game-container">
      {/* Game Title */}
      <div className="game-header">
        <h1 className="game-title">BEAR GAME</h1>
        <div className="game-subtitle">Wild Adventure Awaits</div>
      </div>
      
      
      
      {/* Game Description */}
      <div className="question-container">
        <p style={{ fontSize: '1.3rem', color: '#f1f2f6', marginBottom: '1rem' }}>
          Embark on an epic wilderness adventure!
        </p>
        <p style={{ fontSize: '1.1rem', color: '#a0b3c6' }}>
          Collect honey, avoid traps, and become the forest champion.
        </p>
      </div>
      
      {/* Start Button */}
      <button 
        className="action-button"
        onClick={props.advance}
        style={{ margin: '30px auto' }}
      >
        START ADVENTURE
      </button>
      
      {/* Footer Tip */}
      <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
        <span style={{ color: '#8fa3b8', fontSize: '0.9rem', fontStyle: 'italic' }}>
          Tip: See how long you can survive
        </span>
      </div>
      
      {/* Decorative floating icons */}
      <div className="floating-icon">🐻</div>
      <div className="floating-icon">🍯</div>
      <div className="floating-icon">🌲</div>
    </div>
  );
}

export default Welcome;