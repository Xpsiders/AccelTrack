import api from './api';

export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (!('Notification' in window)) {
    throw new Error('Notifications not supported');
  }
  return await Notification.requestPermission();
};

export const registerDeviceToken = async (token: string, deviceType: string): Promise<void> => {
  await api.post('/notifications/register-device', { token, deviceType });
};

export const unregisterDeviceToken = async (token: string): Promise<void> => {
  await api.delete('/notifications/unregister-device', { data: { token } });
};

export const getNotificationSettings = async (): Promise<any> => {
  const response = await api.get('/notifications/settings');
  return response.data.data;
};

export const updateNotificationSettings = async (settings: any): Promise<void> => {
  await api.put('/notifications/settings', settings);
};