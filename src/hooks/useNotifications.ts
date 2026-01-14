import { useEffect } from 'react';
import { useNotification } from '../context/NotificationContext';

export const useNotifications = () => {
  const { permission, requestPermission } = useNotification();

  useEffect(() => {
    if (permission === 'default') {
      requestPermission();
    }
  }, [permission, requestPermission]);

  return { permission, requestPermission };
};