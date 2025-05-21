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
  image: string;
}

const ShapeCard: React.FC<ShapeCardProps> = ({
  id,
  name,
  arabicName,
  transliteration,
  sides,
  image
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
        <div className="w-32 h-32 mb-3 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="font-bold mb-1">{name}</h3>
        <p className="text-lg mb-1 rtl">{arabicName}</p>
        <p className="text-sm text-[var(--neutral-600)]">{transliteration}</p>
        <p className="text-xs text-[var(--neutral-500)] mt-1">
          {sides > 0 ? `${sides} sides` : 'No sides'}
        </p>
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