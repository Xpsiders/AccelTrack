import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useAuth } from '../context/AuthContext';
import { NotificationBell } from '../components/common/NotificationBell';

export const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <div className="px-4 py-2 bg-gray-50 rounded-lg">{user?.fullName}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <div className="px-4 py-2 bg-gray-50 rounded-lg">{user?.email}</div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Notifications</label>
            <NotificationBell />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};