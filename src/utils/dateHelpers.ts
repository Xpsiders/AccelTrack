import { format, parseISO, isToday, isTomorrow, isPast, differenceInHours } from 'date-fns';

export const formatDate = (date: string): string => {
  return format(parseISO(date), 'MMM dd, yyyy');
};

export const formatTime = (time: string): string => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const displayHour = hour % 12 || 12;
  return `${displayHour}:${minutes} ${ampm}`;
};

export const isTestToday = (date: string): boolean => {
  return isToday(parseISO(date));
};

export const isTestTomorrow = (date: string): boolean => {
  return isTomorrow(parseISO(date));
};

export const isTestPast = (date: string, time: string): boolean => {
  return isPast(parseISO(`${date}T${time}`));
};

export const getTestTimeStatus = (date: string, time: string): string => {
  const testDateTime = parseISO(`${date}T${time}`);
  const hoursDiff = differenceInHours(testDateTime, new Date());
  
  if (hoursDiff < 0) return 'Past';
  if (hoursDiff < 1) return 'In less than 1 hour';
  if (hoursDiff < 24) return `In ${hoursDiff} hours`;
  return `In ${Math.floor(hoursDiff / 24)} days`;
};

export const sortTestsByDate = (tests: any[]): any[] => {
  return [...tests].sort((a, b) => {
    const dateA = new Date(`${a.testDate}T${a.testTime}`);
    const dateB = new Date(`${b.testDate}T${b.testTime}`);
    return dateA.getTime() - dateB.getTime();
  });
};