import React from 'react';
import { Users, Book, Moon, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      title: "Total Users",
      value: "250",
      icon: <Users size={24} />,
      color: "bg-blue-500",
      path: "/admin/users"
    },
    {
      title: "Arabic Letters",
      value: "29",
      icon: <Book size={24} />,
      color: "bg-green-500",
      path: "/admin/arabic"
    },
    {
      title: "Duas",
      value: "15",
      icon: <Moon size={24} />,
      color: "bg-purple-500",
      path: "/admin/duas"
    },
    {
      title: "Colors",
      value: "20",
      icon: <Palette size={24} />,
      color: "bg-orange-500",
      path: "/admin/colors"
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(stat.path)}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} text-white p-3 rounded-lg`}>
                  {stat.icon}
                </div>
                <span className="text-3xl font-bold">{stat.value}</span>
              </div>
              <h3 className="text-[var(--neutral-600)]">{stat.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">New user registered</p>
                <p className="text-sm text-[var(--neutral-600)]">2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">Content updated</p>
                <p className="text-sm text-[var(--neutral-600)]">1 hour ago</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">New dua added</p>
                <p className="text-sm text-[var(--neutral-600)]">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate('/admin/users/new')}
              className="p-4 bg-[var(--primary)]10 rounded-lg text-[var(--primary)] font-medium hover:bg-[var(--primary)]20"
            >
              Add New User
            </button>
            <button
              onClick={() => navigate('/admin/duas/new')}
              className="p-4 bg-[var(--accent)]10 rounded-lg text-[var(--accent)] font-medium hover:bg-[var(--accent)]20"
            >
              Add New Dua
            </button>
            <button
              onClick={() => navigate('/admin/colors/new')}
              className="p-4 bg-[var(--purple)]10 rounded-lg text-[var(--purple)] font-medium hover:bg-[var(--purple)]20"
            >
              Add New Color
            </button>
            <button
              onClick={() => navigate('/admin/names/new')}
              className="p-4 bg-[var(--secondary)]10 rounded-lg text-[var(--secondary)] font-medium hover:bg-[var(--secondary)]20"
            >
              Add New Name
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;