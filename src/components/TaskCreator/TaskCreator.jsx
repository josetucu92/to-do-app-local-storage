import React, { useState } from "react";

export default function TaskCreator({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTaskName}
          placeholder="Enter a new task"
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Save task</button>
      </form>
    </div>
  );
}
