import React from 'react';
import { Bell } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

export const NotificationBell: React.FC = () => {
  const { permission, requestPermission } = useNotification();

  return (
    <div className="flex items-center gap-2">
      <Bell className="w-5 h-5" />
      {permission === 'granted' ? (
        <span className="text-sm text-green-600">Notifications Active</span>
      ) : permission === 'denied' ? (
        <span className="text-sm text-red-600">Notifications Blocked</span>
      ) : (
        <button
          onClick={requestPermission}
          className="text-sm text-indigo-600 hover:underline"
        >
          Enable Notifications
        </button>
      )}
    </div>
  );
};