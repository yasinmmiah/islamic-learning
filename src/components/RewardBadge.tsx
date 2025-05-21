import React from 'react';

interface RewardBadgeProps {
  type: 'star' | 'trophy' | 'medal';
  achieved?: boolean;
  label: string;
}

const RewardBadge: React.FC<RewardBadgeProps> = ({
  type,
  achieved = false,
  label
}) => {
  // Emoji mapping
  const emojis = {
    star: '⭐',
    trophy: '🏆',
    medal: '🥇'
  };

  return (
    <div className="flex flex-col items-center">
      <div 
        className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl
          ${achieved ? 'animate-float' : 'opacity-40 grayscale'}`}
        style={{
          backgroundColor: achieved ? 'var(--warning)' : 'var(--neutral-200)',
          boxShadow: achieved ? '0 4px 8px rgba(0,0,0,0.1)' : 'none'
        }}
      >
        {emojis[type]}
      </div>
      <p className={`mt-2 text-sm font-semibold ${achieved ? 'text-[var(--neutral-800)]' : 'text-[var(--neutral-500)]'}`}>
        {label}
      </p>
    </div>
  );
};

export default RewardBadge;