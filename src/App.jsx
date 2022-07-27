import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator/TaskCreator";
import "./App.css";

function App() {
  const [taskItems, setTaskItems] = useState([]);

  const createNewTask = (taskName) => {
    if(!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }

  useEffect(()=> {
    let data = localStorage.getItem("tasks");
    if(data) {
      setTaskItems((JSON.parse(data)));
    }
  },[])

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="App">
      <TaskCreator createNewTask={createNewTask} />

      <table>
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
          taskItems.map(task => (
            <tr key={task.name}>
              <td>{task.name}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
