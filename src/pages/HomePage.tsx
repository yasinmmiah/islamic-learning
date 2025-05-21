import React from 'react';
import { Book, Languages, Calculator, BookOpen, Puzzle, Moon, Palette, Heart, Square, Cat } from 'lucide-react';
import CategoryCard from '../components/CategoryCard';

const HomePage: React.FC = () => {
  const categories = [
    {
      title: "Arabic Alphabet",
      icon: <Languages size={32} className="text-[var(--primary)]" />,
      color: "var(--primary)",
      path: "/arabic",
      description: "Learn the Huruf Hijaiyah"
    },
    {
      title: "English Alphabet",
      icon: <Book size={32} className="text-[var(--secondary)]" />,
      color: "var(--secondary)",
      path: "/english",
      description: "Learn the ABC's"
    },
    {
      title: "Numbers",
      icon: <Calculator size={32} className="text-[var(--purple)]" />,
      color: "var(--purple)",
      path: "/numbers",
      description: "Count from 1 to 100"
    },
    {
      title: "Colors",
      icon: <Palette size={32} className="text-[var(--accent-dark)]" />,
      color: "var(--accent-dark)",
      path: "/colors",
      description: "Learn colors in Arabic"
    },
    {
      title: "Shapes",
      icon: <Square size={32} className="text-[var(--secondary)]" />,
      color: "var(--secondary)",
      path: "/shapes",
      description: "Learn shapes in Arabic"
    },
    {
      title: "Animals",
      icon: <Cat size={32} className="text-[var(--primary)]" />,
      color: "var(--primary)",
      path: "/animals",
      description: "Learn animal names in Arabic"
    },
    {
      title: "Allah's Names",
      icon: <Heart size={32} className="text-[var(--primary-dark)]" />,
      color: "var(--primary-dark)",
      path: "/names",
      description: "Learn the 99 names of Allah"
    },
    {
      title: "Daily Duas",
      icon: <Moon size={32} className="text-[var(--accent)]" />,
      color: "var(--accent)",
      path: "/duas",
      description: "Learn important supplications"
    },
    {
      title: "Prophet Stories",
      icon: <BookOpen size={32} className="text-[var(--primary-dark)]" />,
      color: "var(--primary-dark)",
      path: "/prophets",
      description: "Stories of the prophets"
    },
    {
      title: "Fun Games",
      icon: <Puzzle size={32} className="text-[var(--secondary-dark)]" />,
      color: "var(--secondary-dark)",
      path: "/games",
      description: "Play and learn"
    }
  ];

  return (
    <div className="pb-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--primary-dark)] mb-2">
          Noor Kids
        </h1>
        <p className="text-lg text-[var(--neutral-600)]">
          Islamic Learning for Little Muslims
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            icon={category.icon}
            color={category.color}
            path={category.path}
            description={category.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;