import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface LetterCardProps {
  id: string;
  letter: string;
  transliteration?: string;
  englishName?: string;
  type: 'arabic' | 'english';
  color?: string;
}

const LetterCard: React.FC<LetterCardProps> = ({ 
  id, 
  letter, 
  transliteration, 
  englishName,
  type,
  color = 'var(--primary)'
}) => {
  const navigate = useNavigate();
  const { getProgress } = useProgress();
  const progress = getProgress(`${type}-${id}`);
  const completed = progress >= 100;

  const handleClick = () => {
    navigate(`/${type}/${id}`);
  };

  return (
    <div 
      className="card card-interactive relative bounce-on-click"
      onClick={handleClick}
    >
      <div 
        className={`absolute ${completed ? 'block' : 'hidden'} top-2 right-2 text-[var(--warning)]`}
        title="Completed"
      >
        <Star fill="var(--warning)" />
      </div>
      <div 
        className="p-4 flex flex-col items-center justify-center"
        style={{ backgroundColor: `${color}10` }}
      >
        <p className={`text-5xl font-bold mb-2 ${type === 'arabic' ? 'rtl' : ''}`}>
          {letter}
        </p>
        {transliteration && (
          <p className="text-sm font-semibold mb-1">{transliteration}</p>
        )}
        {englishName && type === 'arabic' && (
          <p className="text-xs text-[var(--neutral-600)] text-center">
            {englishName}
          </p>
        )}
      </div>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar m-2">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LetterCard;