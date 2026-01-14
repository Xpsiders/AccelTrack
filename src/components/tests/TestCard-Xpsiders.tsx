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
    <div className="card mb-3">
      <div className="card-body p-3">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <h5 className="card-title mb-1">{test.subject}</h5>
            <p className="card-subtitle text-muted mb-2">{test.topic}</p>
            <div className="d-flex gap-3 small text-muted">
              <span className="d-flex align-items-center">
                <Calendar className="me-1" />
                {formatDate(test.testDate)}
              </span>
              <span className="d-flex align-items-center">
                <Clock className="me-1" />
                {formatTime(test.testTime)}
              </span>
            </div>
            <p className="small text-primary mt-1 mb-0">{getTestTimeStatus(test.testDate, test.testTime)}</p>
            {test.notes && <p className="small text-muted mt-2 mb-0">{test.notes}</p>}
          </div>

          <div className="d-flex gap-2 ms-3">
            <button
              onClick={() => onEdit(test)}
              className="btn btn-outline-primary btn-sm"
              aria-label="Edit"
            >
              <Edit2 />
            </button>
            <button
              onClick={() => onDelete(test.id)}
              className="btn btn-outline-danger btn-sm"
              aria-label="Delete"
            >
              <Trash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
