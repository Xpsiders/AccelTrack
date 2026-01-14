import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTests } from '../../hooks/useTests';
import { TestCard } from './TestCard';
import { TestForm } from './TestForm';
import type { Test, CreateTestRequest } from '../../types/test.types';
import { sortTestsByDate } from '../../utils/dateHelpers';

export const TestList: React.FC = () => {
  const { tests, loading, error, createTest, updateTest, deleteTest } = useTests();
  const [showForm, setShowForm] = useState(false);
  const [editingTest, setEditingTest] = useState<Test | null>(null);

  const handleSubmit = async (data: CreateTestRequest) => {
    try {
      if (editingTest) {
        await updateTest(editingTest.id, data);
        setEditingTest(null);
      } else {
        await createTest(data);
      }
      setShowForm(false);
    } catch (err) {
      console.error('Failed to save test:', err);
    }
  };

  const handleEdit = (test: Test) => {
    setEditingTest(test);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingTest(null);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this test?')) {
      try {
        await deleteTest(id);
      } catch (err) {
        console.error('Failed to delete test:', err);
      }
    }
  };

  if (loading) {
    return <div className="text-center py-4">Loading tests...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-danger">{error}</div>;
  }

  const sortedTests = sortTestsByDate(tests);

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h5 mb-0">Upcoming Tests</h2>
          <button
            onClick={() => {
              setShowForm(!showForm);
              setEditingTest(null);
            }}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <Plus />
            Add Test
          </button>
        </div>

        {showForm && (
          <TestForm
            onSubmit={handleSubmit}
            onCancel={handleCancel}
            initialData={editingTest || undefined}
          />
        )}

        {sortedTests.length === 0 ? (
          <p className="text-muted text-center py-4 mb-0">No tests scheduled yet</p>
        ) : (
          <div className="mt-3">
            {sortedTests.map((test) => (
              <TestCard
                key={test.id}
                test={test}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};