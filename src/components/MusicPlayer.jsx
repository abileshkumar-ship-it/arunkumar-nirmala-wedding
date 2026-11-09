import { useState, useEffect, useRef } from 'react';
import { Music, Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MUSIC_SRC = '/goodness-of-god.mp3'; // ← rename your MP3 file to this

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying]   = useState(false);
  const [muted, setMuted]       = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [loaded, setLoaded]     = useState(false);

  /* Try autoplay on first load */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;
    audio.loop   = true;

    const tryAutoplay = async () => {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        // Browser blocked autoplay — show friendly hint
        setShowHint(true);
      }
    };

    if (loaded) tryAutoplay();
  }, [loaded]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => {
        setPlaying(true);
        setShowHint(false);
      });
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={MUSIC_SRC}
        preload="auto"
        onCanPlayThrough={() => setLoaded(true)}
      />

      {/* Hint banner — shown when autoplay is blocked */}
      {showHint && (
        <div className="music-hint" role="status" aria-live="polite">
          <Music size={16} aria-hidden="true" />
          <span>A melody to celebrate our special day.</span>
          <button className="music-hint__btn" onClick={togglePlay} aria-label="Play background music">
            Tap to play music
          </button>
          <button className="music-hint__close" onClick={() => setShowHint(false)} aria-label="Dismiss">
            ×
          </button>
        </div>
      )}

      {/* Floating music button */}
      <div className="music-fab" aria-label="Music controls">
        <button
          className={`music-fab__btn ${playing ? 'music-fab__btn--playing' : ''}`}
          onClick={togglePlay}
          aria-label={playing ? 'Pause music' : 'Play music'}
          title={playing ? 'Pause music' : 'Play music'}
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
        </button>
        <button
          className="music-fab__mute"
          onClick={toggleMute}
          aria-label={muted ? 'Unmute music' : 'Mute music'}
          title={muted ? 'Unmute' : 'Mute'}
        >
          {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </div>
    </>
  );
}