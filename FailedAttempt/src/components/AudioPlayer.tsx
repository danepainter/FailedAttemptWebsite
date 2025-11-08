import { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  title: string;
  audioUrl: string;
  maxDuration?: number; // in seconds, default 15
}

const AudioPlayer = ({ title, audioUrl, maxDuration = 15 }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      // Stop after maxDuration seconds
      if (audio.currentTime >= maxDuration) {
        audio.pause();
        audio.currentTime = 0;
        setIsPlaying(false);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [maxDuration]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-surface border-2 border-text-secondary p-4">
      <audio ref={audioRef} src={audioUrl} />
      
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-display text-sm uppercase tracking-wide">
          {title}
        </h4>
        <span className="text-xs text-text-secondary">
          {formatTime(currentTime)} / {formatTime(maxDuration)}
        </span>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={togglePlayPause}
          className="bg-accent text-primary px-6 py-2 font-display text-sm uppercase tracking-wider hover:bg-text-primary hover:text-accent transition-colors border-2 border-primary"
        >
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </button>

        <div className="flex-1 bg-primary h-2">
          <div
            className="bg-accent h-full transition-all"
            style={{ width: `${(currentTime / maxDuration) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

