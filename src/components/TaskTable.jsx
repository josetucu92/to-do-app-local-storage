import React from "react";
import TaskRow from "./TaskRow";

function TaskTable({ tasks, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} toggleTask={toggleTask} key={task.name} />
      ));
  };

  return (
      <table className="table table-dark table-stripped table-bordered border-secondary">
        <thead>
          <tr className="table-secondary">
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>{taskTableRows(showCompleted)}</tbody>
      </table>
  );
}

export default TaskTable;
