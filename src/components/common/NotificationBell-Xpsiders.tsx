import React from 'react';
import { Bell } from 'lucide-react';
import { useNotification } from '../../context/NotificationContext';

export const NotificationBell: React.FC = () => {
  const { permission, requestPermission } = useNotification();

  return (
    <div className="d-flex align-items-center gap-2">
      <Bell />
      {permission === 'granted' ? (
        <span className="small text-success">Notifications Active</span>
      ) : permission === 'denied' ? (
        <span className="small text-danger">Notifications Blocked</span>
      ) : (
        <button
          onClick={requestPermission}
          className="btn btn-link p-0 small"
          type="button"
        >
          Enable Notifications
        </button>
      )}
    </div>
  );
};