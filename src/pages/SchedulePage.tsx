import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { ScheduleView } from '../components/schedules/ScheduleView';

export const SchedulePage: React.FC = () => {
  return (
    <DashboardLayout>
      <ScheduleView />
    </DashboardLayout>
  );
};
