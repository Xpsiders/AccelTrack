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
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1f2937', marginBottom: '0' }}>Dashboard</h1>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-6">
          <div style={{
            background: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
              <Calendar style={{ width: '1.5rem', height: '1.5rem', color: '#4f46e5' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>Upcoming Tests</h2>
            </div>
            {testsLoading ? (
              <p style={{ color: '#6b7280' }}>Loading...</p>
            ) : upcomingTests.length === 0 ? (
              <p style={{ color: '#6b7280' }}>No upcoming tests</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {upcomingTests.map(test => (
                  <div key={test.id} style={{
                    borderLeft: '4px solid #4f46e5',
                    paddingLeft: '0.75rem'
                  }}>
                    <p style={{ fontWeight: 600, color: '#1f2937', margin: 0 }}>{test.subject}</p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>{test.topic}</p>
                    <p style={{ fontSize: '0.875rem', color: '#9ca3af', margin: 0 }}>
                      {formatDate(test.testDate)} at {formatTime(test.testTime)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <div style={{
            background: 'white',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
            padding: '1.5rem'
          }}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', alignItems: 'center' }}>
              <Clock style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1f2937', margin: 0 }}>Today's Schedule</h2>
            </div>
            {schedulesLoading ? (
              <p style={{ color: '#6b7280' }}>Loading...</p>
            ) : todaySchedules.length === 0 ? (
              <p style={{ color: '#6b7280' }}>No classes today</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {todaySchedules.map(schedule => (
                  <div key={schedule.id} style={{
                    borderLeft: '4px solid #16a34a',
                    paddingLeft: '0.75rem'
                  }}>
                    <p style={{ fontWeight: 600, color: '#1f2937', margin: 0 }}>{schedule.subject}</p>
                    <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
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