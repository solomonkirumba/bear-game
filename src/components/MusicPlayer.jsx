import { useEffect, useRef, useState } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Initialize audio with YOUR mp3 file
    audioRef.current = new Audio('/audio/bg.mp3');
    audioRef.current.loop = true; // Loops forever
    audioRef.current.volume = 0.3; // 30% volume
    
    // Try to play automatically
    audioRef.current.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Auto-play failed (browser restriction)
        console.log('Waiting for user interaction to play music');
      });

    // Play when user first interacts
    const handleInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
        
        // Remove listeners after successful play
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // Cleanup on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 1000,
      background: 'rgba(30, 40, 50, 0.9)',
      borderRadius: '50px',
      padding: '10px 15px',
      border: '1px solid rgba(255, 204, 51, 0.3)',
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }}>
      <button 
        onClick={togglePlay}
        style={{
          background: 'transparent',
          border: 'none',
          color: 'white',
          fontSize: '1.5rem',
          cursor: 'pointer',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isPlaying ? '⏸️' : '▶️'}
      </button>
      <span style={{ color: '#a0b3c6', fontSize: '0.9rem' }}>
        {isPlaying ? 'Music ON' : 'Music OFF'}
      </span>
    </div>
  );
}

export default MusicPlayer;