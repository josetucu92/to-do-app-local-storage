import React from "react";

export default function VisibilityControl({setShowCompleted, cleanTasks, isChecked}) {

  const handleDelete = () => {
    if(window.confirm("Are you sure you want to delete all completed tasks?")) {
      cleanTasks();
    }
  }

  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />{" "}
      <label>Show Completed Tasks</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  );
}
