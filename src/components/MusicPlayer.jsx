import { useState, useRef } from 'react';
import { Pause, Play, Volume2, VolumeX } from 'lucide-react';

const MUSIC_SRC = '/goodness-of-god.mp3';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [entered, setEntered]   = useState(false);
  const [playing, setPlaying]   = useState(false);
  const [muted,   setMuted]     = useState(false);

  const handleEnter = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.18;
    audio.loop   = true;
    audio.play()
      .then(() => setPlaying(true))
      .catch(() => {});
    setEntered(true);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) { audio.pause(); setPlaying(false); }
    else { audio.play().then(() => setPlaying(true)); }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !muted;
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src={MUSIC_SRC} preload="auto" />

      {/* ── Welcome splash ── */}
      {!entered && (
        <div className="splash" onClick={handleEnter} role="button" tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && handleEnter()}
          aria-label="Enter wedding invitation">
          <div className="splash__inner">
            <p className="splash__script">Arun &amp; Nirmala</p>
            <p className="splash__sub">invite you to celebrate their wedding</p>
            <button className="splash__btn" onClick={handleEnter}>
              ♪ Open Invitation
            </button>
            <p className="splash__note">Tap to enter with music</p>
          </div>
        </div>
      )}

      {/* ── Floating controls (shown after entry) ── */}
      {entered && (
        <div className="music-fab" aria-label="Music controls">
          <button
            className={`music-fab__btn ${playing ? 'music-fab__btn--playing' : ''}`}
            onClick={togglePlay}
            aria-label={playing ? 'Pause music' : 'Play music'}
            title={playing ? 'Pause' : 'Play'}
          >
            {playing ? <Pause size={18} /> : <Play size={18} />}
          </button>
          <button
            className="music-fab__mute"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      )}
    </>
  );
}