import React from 'react';
import { DashboardLayout } from '../components/layout/DashboardLayout';
import { TestList } from '../components/tests/TestList';

export const TestsPage: React.FC = () => {
  return (
    <DashboardLayout>
      <TestList />
    </DashboardLayout>
  );
};