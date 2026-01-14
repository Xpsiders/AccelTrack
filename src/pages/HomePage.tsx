import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Calendar, Clock, Bell } from 'lucide-react';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-4">
        <BookOpen className="w-20 h-20 text-indigo-600 mx-auto mb-6" />
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Student Tracker</h1>
        <p className="text-xl text-gray-600 mb-8">
          Manage your tests, schedule classes, and never miss an exam with real-time notifications
        </p>

        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Calendar className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Track Tests</h3>
            <p className="text-gray-600 text-sm">Keep all your exams organized in one place</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Clock className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Manage Schedule</h3>
            <p className="text-gray-600 text-sm">View your weekly class schedule at a glance</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Bell className="w-12 h-12 text-indigo-600 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Get Notifications</h3>
            <p className="text-gray-600 text-sm">Receive reminders 24h and 1h before tests</p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => navigate('/login')}
            className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/register')}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-indigo-600 hover:bg-indigo-50"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};