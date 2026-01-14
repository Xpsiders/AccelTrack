import React from 'react';
import { Calendar, Clock, Edit2, Trash2 } from 'lucide-react';
import type { Test } from '../../types/test.types';
import { formatDate, formatTime, getTestTimeStatus } from '../../utils/dateHelpers';

interface TestCardProps {
  test: Test;
  onEdit: (test: Test) => void;
  onDelete: (id: number) => void;
}

export const TestCard: React.FC<TestCardProps> = ({ test, onEdit, onDelete }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{test.subject}</h3>
          <p className="text-gray-600">{test.topic}</p>
          <div className="flex gap-4 mt-2 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(test.testDate)}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {formatTime(test.testTime)}
            </span>
          </div>
          <p className="text-sm text-indigo-600 mt-1">{getTestTimeStatus(test.testDate, test.testTime)}</p>
          {test.notes && <p className="text-sm text-gray-600 mt-2">{test.notes}</p>}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(test)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(test.id)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
