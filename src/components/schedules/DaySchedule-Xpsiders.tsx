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
    <div className="mb-4">
      <h5 className="mb-3 border-bottom pb-2">
        {day.charAt(0) + day.slice(1).toLowerCase()}
      </h5>
      {sortedSchedules.length === 0 ? (
        <p className="text-muted small ms-3">No classes scheduled</p>
      ) : (
        <div className="">
          {sortedSchedules.map((schedule) => (
            <div
              key={schedule.id}
              className="d-flex justify-content-between align-items-center bg-light p-2 rounded mb-2"
            >
              <div>
                <div className="fw-semibold">{schedule.subject}</div>
                <div className="small text-muted">
                  {formatTime(schedule.startTime)} - {formatTime(schedule.endTime)}
                  {schedule.room && ` • Room ${schedule.room}`}
                </div>
              </div>
              <div className="d-flex gap-2 ms-3">
                <button
                  onClick={() => onEdit(schedule)}
                  className="btn btn-outline-primary btn-sm"
                >
                  <Edit2 />
                </button>
                <button
                  onClick={() => onDelete(schedule.id)}
                  className="btn btn-outline-danger btn-sm"
                >
                  <Trash2 />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DaySchedule;
