import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { NotificationBell } from '../components/common/NotificationBell';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div style={{
        background: 'white',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
        padding: '1.5rem',
        maxWidth: '600px'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1f2937', marginBottom: '1.5rem' }}>Profile</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Full Name</label>
            <div style={{ padding: '0.5rem 1rem', background: '#f9fafb', borderRadius: '0.375rem', color: '#1f2937' }}>{user?.fullName}</div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.25rem' }}>Email</label>
            <div style={{ padding: '0.5rem 1rem', background: '#f9fafb', borderRadius: '0.375rem', color: '#1f2937' }}>{user?.email}</div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, color: '#374151', marginBottom: '0.5rem' }}>Notifications</label>
            <NotificationBell />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};