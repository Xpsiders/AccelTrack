import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import type { Schedule } from '../../types/schedule.types';
import { formatTime } from '../../utils/dateHelpers';

interface DayScheduleProps {
  day: string;
  schedules: Schedule[];
  onEdit: (schedule: Schedule) => void;
  onDelete: (id: number) => void;
}

export const DaySchedule: React.FC<DayScheduleProps> = ({ day, schedules, onEdit, onDelete }) => {
  const sortedSchedules = [...schedules].sort((a, b) => 
    a.startTime.localeCompare(b.startTime)
  );

  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold text-gray-700 mb-3 border-b pb-2">
        {day.charAt(0) + day.slice(1).toLowerCase()}
      </h3>
      {sortedSchedules.length === 0 ? (
        <p className="text-gray-400 text-sm ml-4">No classes scheduled</p>
      ) : (
        <div className="space-y-2">
          {sortedSchedules.map((schedule) => (
            <div
              key={schedule.id}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition"
            >
              <div>
                <span className="font-semibold text-gray-800">{schedule.subject}</span>
                <div className="text-sm text-gray-600">
                  {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                  {schedule.room && ` • Room ${schedule.room}`}
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(schedule)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onDelete(schedule.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
