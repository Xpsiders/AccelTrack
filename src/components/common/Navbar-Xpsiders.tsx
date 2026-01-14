import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ background: 'white', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)' }}>
      <div className="container-lg">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '4rem', padding: '0 1rem' }}>
          <Link to="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
            <Logo size={40} showText={false} />
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937' }}>AccelTrack</span>
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151' }}>
              <User style={{ width: '1.25rem', height: '1.25rem' }} />
              <span>{user?.fullName}</span>
            </div>
            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: '#374151',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#dc2626'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#374151'}
            >
              <LogOut style={{ width: '1.25rem', height: '1.25rem' }} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};