import React from 'react';

interface ActivityCardProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  onClick: () => void;
  description?: string;
}

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  icon,
  color = 'var(--primary)',
  onClick,
  description
}) => {
  return (
    <div
      className="card card-interactive bounce-on-click"
      onClick={onClick}
    >
      <div 
        className="p-4 flex flex-col items-center text-center"
        style={{ backgroundColor: `${color}10` }}
      >
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
          style={{ backgroundColor: color }}
        >
          <div className="text-white">
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
        {description && (
          <p className="text-sm text-[var(--neutral-600)] mt-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ActivityCard;