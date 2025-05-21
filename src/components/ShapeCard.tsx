import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface ShapeCardProps {
  id: string;
  name: string;
  arabicName: string;
  transliteration: string;
  sides: number;
}

const ShapeCard: React.FC<ShapeCardProps> = ({
  id,
  name,
  arabicName,
  transliteration,
  sides
}) => {
  const navigate = useNavigate();
  const { getProgress } = useProgress();
  const progress = getProgress(`shape-${id}`);
  const completed = progress >= 100;

  return (
    <div
      className="card card-interactive relative"
      onClick={() => navigate(`/shapes/${id}`)}
    >
      <div
        className={`absolute ${completed ? 'block' : 'hidden'} top-2 right-2 text-[var(--warning)]`}
        title="Completed"
      >
        <Star fill="var(--warning)" />
      </div>
      <div className="p-4 flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-[var(--secondary)]10 rounded-full flex items-center justify-center mb-3">
          <span className="text-[var(--secondary)] text-lg font-bold">
            {sides > 0 ? sides : '∞'}
          </span>
        </div>
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="text-lg mb-1 rtl">{arabicName}</p>
        <p className="text-sm text-[var(--neutral-600)]">{transliteration}</p>
      </div>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar m-2">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: 'var(--secondary)' }}
          />
        </div>
      )}
    </div>
  );
};

export default ShapeCard;