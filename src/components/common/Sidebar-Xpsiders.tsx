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
    <aside style={{ width: '16rem', background: 'white', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)', minHeight: '100vh' }}>
      <nav style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {links.map(({ to, icon: Icon, label }) => {
          const isActive = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '0.5rem',
                transition: 'all 0.2s ease',
                textDecoration: 'none',
                background: isActive ? '#4f46e5' : 'transparent',
                color: isActive ? 'white' : '#374151'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent';
              }}
            >
              <Icon style={{ width: '1.25rem', height: '1.25rem' }} />
              <span style={{ fontWeight: 500 }}>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};