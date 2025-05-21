import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogOut, Settings, Users, Book, Moon, Palette, Heart, Hash, Square } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: <Settings size={20} />
    },
    {
      title: "Users",
      path: "/admin/users",
      icon: <Users size={20} />
    },
    {
      title: "Arabic Letters",
      path: "/admin/arabic",
      icon: <Book size={20} />
    },
    {
      title: "English Letters",
      path: "/admin/english",
      icon: <Book size={20} />
    },
    {
      title: "Numbers",
      path: "/admin/numbers",
      icon: <Hash size={20} />
    },
    {
      title: "Colors",
      path: "/admin/colors",
      icon: <Palette size={20} />
    },
    {
      title: "Shapes",
      path: "/admin/shapes",
      icon: <Square size={20} />
    },
    {
      title: "Allah's Names",
      path: "/admin/names",
      icon: <Heart size={20} />
    },
    {
      title: "Duas",
      path: "/admin/duas",
      icon: <Moon size={20} />
    }
  ];

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/admin/login');
      toast.success('Signed out successfully');
    } catch (error) {
      toast.error('Error signing out');
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-[var(--primary-dark)] text-white">
        <div className="p-4">
          <h1 className="text-xl font-bold">Admin Panel</h1>
        </div>
        
        <nav className="mt-4">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center px-4 py-3 text-left ${
                location.pathname === item.path
                  ? 'bg-white/10'
                  : 'hover:bg-white/5'
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.title}
            </button>
          ))}
          
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-3 text-left text-red-300 hover:bg-white/5"
          >
            <LogOut size={20} className="mr-3" />
            Sign Out
          </button>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;