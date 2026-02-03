function Welcome(props) {
  return (
    <div className="game-container" id="welcome-screen">
      {/* Game Title */}
      <div className="game-header" id="welcome-header">
        <h1 className="game-title" id="main-title">BEAR GAME</h1>
        <div className="game-subtitle" id="welcome-subtitle">Wild Adventure Awaits</div>
      </div>
      
      {/* Bear Icon Container */}
      <div className="welcome-bear-container" id="bear-illustration">
        <div className="bear-ears">
          <div className="bear-ear left-ear" id="bear-ear-left"></div>
          <div className="bear-ear right-ear" id="bear-ear-right"></div>
        </div>
        <div className="bear-face" id="bear-face">
          <div className="bear-eyes">
            <div className="bear-eye left-eye" id="bear-eye-left"></div>
            <div className="bear-eye right-eye" id="bear-eye-right"></div>
          </div>
          <div className="bear-nose" id="bear-nose"></div>
        </div>
      </div>
      
      {/* Game Description */}
      <div className="welcome-description" id="game-description">
        <p className="description-line description-main">
          Embark on an epic wilderness adventure!
        </p>
        <p className="description-line description-secondary">
          Collect honey, avoid traps, and become the forest champion.
        </p>
      </div>
      
      {/* Start Button */}
      <button 
        className="action-button welcome-start-btn"
        id="start-adventure-btn"
        onClick={props.advance}
      >
        <span className="button-text">START ADVENTURE</span>
        <span className="button-arrow">→</span>
      </button>
      
      {/* Footer Tip */}
      <div className="welcome-footer" id="game-tip">
        <span className="tip-text">
          Tip: See how long you can survive
        </span>
      </div>
      
      {/* Decorative floating icons */}
      <div className="decorative-icons">
        <div className="floating-icon bear-icon" id="floating-bear">🐻</div>
        <div className="floating-icon honey-icon" id="floating-honey">🍯</div>
        <div className="floating-icon tree-icon" id="floating-tree">🌲</div>
        <div className="forest-background"></div>
    </div>
      </div>
       
  );
  
}

export default Welcome;