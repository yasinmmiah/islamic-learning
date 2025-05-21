import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

interface NumberCardProps {
  id: string;
  number: string;
  arabicNumber?: string;
  color?: string;
}

const NumberCard: React.FC<NumberCardProps> = ({
  id,
  number,
  arabicNumber,
  color = 'var(--secondary)'
}) => {
  const navigate = useNavigate();
  const { getProgress } = useProgress();
  const progress = getProgress(`number-${id}`);
  const completed = progress >= 100;

  return (
    <div
      className="card card-interactive bounce-on-click relative"
      onClick={() => navigate(`/numbers/${id}`)}
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
        <p className="text-5xl font-bold mb-1">{number}</p>
        {arabicNumber && (
          <p className="text-xl rtl">{arabicNumber}</p>
        )}
      </div>
      {progress > 0 && progress < 100 && (
        <div className="progress-bar m-2">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default NumberCard;