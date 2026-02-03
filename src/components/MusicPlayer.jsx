import { useEffect, useRef, useState } from 'react';

function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('/audio/bg.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    
    // Try to play automatically
    const tryAutoPlay = async () => {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('Music will start on user interaction');
      }
    };

    tryAutoPlay();

    // Play on user interaction
    const handleInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(console.error);
        
        document.removeEventListener('click', handleInteraction);
        document.removeEventListener('keydown', handleInteraction);
      }
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('keydown', handleInteraction);

    // Cleanup
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

  const toggleMute = () => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e) => {
    if (!audioRef.current) return;
    
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    
    // Auto-unmute when adjusting volume
    if (isMuted && newVolume > 0) {
      audioRef.current.muted = false;
      setIsMuted(false);
    }
  };

  return (
    <div className="music-player-container" id="music-player">
      <div className="music-player" id="music-controls">
        <button 
          className="music-control-btn play-pause-btn"
          id="play-pause-btn"
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          <span className="music-icon">
            {isPlaying ? '⏸️' : '▶️'}
          </span>
        </button>
        
        <button 
          className="music-control-btn mute-btn"
          id="mute-btn"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute music" : "Mute music"}
        >
          <span className="music-icon">
            {isMuted ? '🔇' : '🔊'}
          </span>
        </button>
        
        <div className="volume-control" id="volume-control">
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
            id="volume-slider"
            aria-label="Adjust volume"
          />
          <div className="volume-level" id="volume-level">
            {Math.round(volume * 100)}%
          </div>
        </div>
        
        <div className="music-status" id="music-status">
          <span className="status-indicator">
            {isPlaying ? '🎵 Playing' : '🔇 Paused'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;