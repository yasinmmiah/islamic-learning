import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface ColorCardProps {
  id: string;
  name: string;
  arabicName: string;
  transliteration: string;
  hexCode: string;
}

const ColorCard: React.FC<ColorCardProps> = ({
  id,
  name,
  arabicName,
  transliteration,
  hexCode
}) => {
  const navigate = useNavigate();
  const { getProgress } = useProgress();
  const progress = getProgress(`color-${id}`);
  const completed = progress >= 100;

  return (
    <div
      className="card card-interactive relative"
      onClick={() => navigate(`/colors/${id}`)}
    >
      <div
        className={`absolute ${completed ? 'block' : 'hidden'} top-2 right-2 text-[var(--warning)]`}
        title="Completed"
      >
        <Star fill="var(--warning)" />
      </div>
      <div className="p-4 flex flex-col items-center justify-center">
        <div 
          className="w-16 h-16 rounded-full mb-3"
          style={{ backgroundColor: hexCode, border: hexCode === '#FFFFFF' ? '2px solid #E0E0E0' : 'none' }}
        />
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="text-lg mb-1 rtl">{arabicName}</p>
        <p className="text-sm text-[var(--neutral-600)]">{transliteration}</p>
      </div>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar m-2">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: hexCode }}
          />
        </div>
      )}
    </div>
  );
}

export default ColorCard;