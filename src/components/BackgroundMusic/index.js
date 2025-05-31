import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import './style.css';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set initial volume to 50%
      audioRef.current.muted = true; // Ensure initially muted
      
      // Attempt autoplay
      const playAttempt = audioRef.current.play();
      
      if (playAttempt !== undefined) {
        playAttempt
          .then(() => {
            setIsPlaying(true);
            console.log('Autoplay started successfully (muted)');
          })
          .catch(error => {
            console.log('Autoplay was prevented:', error);
          });
      }
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      setHasInteracted(true);
      
      // If the audio is paused when unmuting, start playing
      if (!isPlaying && !isMuted) {
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  // Use process.env.PUBLIC_URL to ensure the correct path in production
  const audioPath = `${process.env.PUBLIC_URL}/audio/treeway.mp3`;

  return (
    <div className={`background-music-container ${!hasInteracted ? 'initial-state' : ''}`}>
      <audio
        ref={audioRef}
        src={audioPath}
        loop
        preload="auto"
      />
      <button onClick={togglePlay} className="music-control" title={isPlaying ? "Pause" : "Play"}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button 
        onClick={toggleMute} 
        className={`volume-control ${!hasInteracted ? 'pulse' : ''}`}
        title={isMuted ? "Click to unmute" : "Mute"}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      {!hasInteracted && (
        <div className="unmute-tooltip">Click to unmute music</div>
      )}
    </div>
  );
};

export default BackgroundMusic; 