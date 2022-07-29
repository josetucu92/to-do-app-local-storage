import React from "react";

export default function VisibilityControl({
  setShowCompleted,
  cleanTasks,
  isChecked,
}) {
  const handleDelete = () => {
    if (
      window.confirm("Are you sure you want to delete all completed tasks?")
    ) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-center p-2">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        />
        <label>Show Completed Tasks</label>
      </div>

      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
}
