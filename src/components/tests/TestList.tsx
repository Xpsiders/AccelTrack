import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { useTests } from '../../hooks/useTests';
import { TestCard } from './TestCard';
import { TestForm } from './TestForm';
import { Test, CreateTestRequest } from '../../types/test.types';
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
    return <div className="text-center py-8">Loading tests...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-600">{error}</div>;
  }

  const sortedTests = sortTestsByDate(tests);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Upcoming Tests</h2>
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingTest(null);
          }}
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700"
        >
          <Plus className="w-5 h-5" />
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
        <p className="text-gray-500 text-center py-8">No tests scheduled yet</p>
      ) : (
        <div className="space-y-4 mt-6">
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
  );
};