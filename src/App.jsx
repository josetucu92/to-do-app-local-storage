import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import VisibilityControl from "./components/VisibilityControl";

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createNewTask = (taskName) => {
    if (!taskItems.find((task) => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((item) =>
        item.name === task.name ? { ...item, done: !item.done } : item
      )
    );
  };

  const cleanTasks = () => {
    setTaskItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    const savedToDos = localStorage.getItem("tasks");
    if (savedToDos) {
      return setTaskItems(JSON.parse(savedToDos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="bg-dark vh-100 text-white">
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask} />

        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />

        {showCompleted === true && (
          <TaskTable
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </div>
  );
}

export default App;
