import React, { ReactNode, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Home, Book, AlignJustify, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { useAudio } from '../context/AudioContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMuted, toggleMute } = useAudio();
  const isHomePage = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Login', path: '/login' },
    { label: 'Developers', path: '/developers' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] text-white p-4 flex justify-between items-center shadow-md">
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => navigate('/')}
        >
          <div className="mr-2 bg-white text-[var(--primary)] p-2 rounded-full">
            <Book size={24} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Noor Kids</h1>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {!isHomePage && (
            <button 
              onClick={() => navigate('/')}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Home"
            >
              <Home size={24} />
            </button>
          )}

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4">
              <h2 className="text-xl font-bold text-[var(--primary-dark)] mb-4">Menu</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      location.pathname === item.path
                        ? 'bg-[var(--primary)]10 text-[var(--primary)]'
                        : 'hover:bg-[var(--neutral-100)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--neutral-800)] text-white p-4 text-center text-sm">
        <p>© 2025 Noor Kids - Islamic Learning for Little Muslims</p>
      </footer>
    </div>
  );
};

export default Layout;