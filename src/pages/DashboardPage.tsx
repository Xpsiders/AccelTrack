import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { useTests } from '../hooks/useTests';
import { useSchedules } from '../hooks/useSchedules';
import { Calendar, Clock } from 'lucide-react';
import { formatDate, formatTime, sortTestsByDate } from '../utils/dateHelpers';

export const DashboardPage: React.FC = () => {
  const { tests, loading: testsLoading } = useTests();
  const { schedules, loading: schedulesLoading } = useSchedules();

  const upcomingTests = sortTestsByDate(tests).slice(0, 3);
  const todaySchedules = schedules.filter(s => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toUpperCase();
    return s.dayOfWeek === today;
  }).sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800">Upcoming Tests</h2>
            </div>
            {testsLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : upcomingTests.length === 0 ? (
              <p className="text-gray-500">No upcoming tests</p>
            ) : (
              <div className="space-y-3">
                {upcomingTests.map(test => (
                  <div key={test.id} className="border-l-4 border-indigo-600 pl-3">
                    <p className="font-semibold text-gray-800">{test.subject}</p>
                    <p className="text-sm text-gray-600">{test.topic}</p>
                    <p className="text-sm text-gray-500">
                      {formatDate(test.testDate)} at {formatTime(test.testTime)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-800">Today's Schedule</h2>
            </div>
            {schedulesLoading ? (
              <p className="text-gray-500">Loading...</p>
            ) : todaySchedules.length === 0 ? (
              <p className="text-gray-500">No classes today</p>
            ) : (
              <div className="space-y-3">
                {todaySchedules.map(schedule => (
                  <div key={schedule.id} className="border-l-4 border-green-600 pl-3">
                    <p className="font-semibold text-gray-800">{schedule.subject}</p>
                    <p className="text-sm text-gray-600">
                      {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                      {schedule.room && ` • Room ${schedule.room}`}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};