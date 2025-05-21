import React, { useState } from 'react';
import { Volume, Loader } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

interface AudioButtonProps {
  src: string;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  color?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({
  src,
  label,
  size = 'md',
  color = 'var(--primary)'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { isMuted, playSound } = useAudio();

  const sizeMap = {
    sm: {
      button: 'h-8 w-8',
      icon: 16,
      text: 'text-xs'
    },
    md: {
      button: 'h-12 w-12',
      icon: 24,
      text: 'text-sm'
    },
    lg: {
      button: 'h-16 w-16',
      icon: 32,
      text: 'text-base'
    }
  };

  const handlePlay = async () => {
    if (isPlaying || isMuted) return;
    
    try {
      setIsLoading(true);
      setIsPlaying(true);
      
      playSound(src);
      
      // Reset state after a delay
      setTimeout(() => {
        setIsPlaying(false);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handlePlay}
        disabled={isPlaying || isMuted}
        className={`${sizeMap[size].button} rounded-full flex items-center justify-center transition-colors ${
          isMuted ? 'bg-gray-200 cursor-not-allowed' : 'hover:opacity-80'
        } bounce-on-click`}
        style={{ backgroundColor: isMuted ? undefined : color }}
        aria-label={label || "Play sound"}
      >
        {isLoading ? (
          <Loader className="animate-spin text-white" size={sizeMap[size].icon} />
        ) : (
          <Volume className="text-white" size={sizeMap[size].icon} />
        )}
      </button>
      {label && (
        <span className={`mt-1 ${sizeMap[size].text} text-[var(--neutral-600)]`}>
          {label}
        </span>
      )}
    </div>
  );
};

export default AudioButton;