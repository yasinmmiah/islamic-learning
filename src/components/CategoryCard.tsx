import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  path: string;
  description?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ 
  title, 
  icon, 
  color, 
  path, 
  description 
}) => {
  const navigate = useNavigate();

  return (
    <div 
      className="card card-interactive bounce-on-click"
      style={{ borderTop: `8px solid ${color}` }}
      onClick={() => navigate(path)}
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div 
          className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
          style={{ backgroundColor: `${color}20` }} // 20% opacity of the color
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {description && (
          <p className="text-[var(--neutral-600)]">{description}</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;