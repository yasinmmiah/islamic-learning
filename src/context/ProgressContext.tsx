import React, { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from './UserContext';
import { ProgressService, Progress } from '../services/progressService';
import toast from 'react-hot-toast';

type ProgressData = {
  [key: string]: number;
};

interface ProgressContextType {
  progress: ProgressData;
  updateProgress: (id: string, value: number) => void;
  completeActivity: (id: string) => void;
  getProgress: (id: string) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<ProgressData>({});
  const { user, supabase } = useUser();
  const progressService = new ProgressService(supabase);

  // Load progress from Supabase when user logs in
  useEffect(() => {
    const loadProgress = async () => {
      if (user && supabase) {
        try {
          const userProgress = await progressService.getUserProgress(user.id);
          const progressMap = userProgress.reduce((acc, item) => {
            acc[item.activity_id] = item.progress;
            return acc;
          }, {} as ProgressData);
          setProgress(progressMap);
        } catch (error) {
          console.error('Error loading progress:', error);
          toast.error('Failed to load progress');
        }
      } else {
        // Load from localStorage when not logged in
        const savedProgress = localStorage.getItem('noorKidsProgress');
        if (savedProgress) {
          try {
            setProgress(JSON.parse(savedProgress));
          } catch (error) {
            console.error('Error parsing progress data:', error);
          }
        }
      }
    };

    loadProgress();
  }, [user]);

  // Save progress to appropriate storage
  const saveProgress = async (newProgress: ProgressData) => {
    if (user && supabase) {
      // Save to Supabase
      try {
        await Promise.all(
          Object.entries(newProgress).map(([activityId, value]) =>
            progressService.updateProgress(user.id, activityId, value)
          )
        );
      } catch (error) {
        console.error('Error saving progress:', error);
        toast.error('Failed to save progress');
      }
    } else {
      // Save to localStorage
      localStorage.setItem('noorKidsProgress', JSON.stringify(newProgress));
    }
  };

  const updateProgress = (id: string, value: number) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        [id]: Math.min(value, 100)
      };
      saveProgress(newProgress);
      return newProgress;
    });
  };

  const completeActivity = (id: string) => {
    updateProgress(id, 100);
  };

  const getProgress = (id: string): number => {
    return progress[id] || 0;
  };

  return (
    <ProgressContext.Provider value={{ progress, updateProgress, completeActivity, getProgress }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};