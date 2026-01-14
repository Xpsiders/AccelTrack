import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, Home, User } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const location = useLocation();

  const links = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/tests', icon: Calendar, label: 'Tests' },
    { to: '/schedule', icon: Clock, label: 'Schedule' },
    { to: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg min-h-screen">
      <nav className="p-4 space-y-2">
        {links.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                isActive
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};