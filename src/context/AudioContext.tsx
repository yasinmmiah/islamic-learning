import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AudioService } from '../services/audioService';

interface AudioContextType {
  isMuted: boolean;
  toggleMute: () => void;
  playSound: (src: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false);

  // Load mute preference from localStorage on initial load
  useEffect(() => {
    const savedMuteState = localStorage.getItem('noorKidsMuted');
    if (savedMuteState !== null) {
      setIsMuted(savedMuteState === 'true');
      AudioService.setMute(savedMuteState === 'true');
    }
    
    // Initialize audio service
    AudioService.init();
  }, []);

  // Save mute preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('noorKidsMuted', String(isMuted));
    AudioService.setMute(isMuted);
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  const playSound = async (src: string) => {
    if (isMuted) return;
    
    try {
      if (src.startsWith('http')) {
        await AudioService.playFromUrl(src);
      } else {
        // Extract sound ID from path
        const id = src.split('/').pop()?.split('.')[0];
        if (id) {
          await AudioService.play(id);
        }
      }
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute, playSound }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = (): AudioContextType => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};