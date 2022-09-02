import { Header}  from "./components/Header";
import { Form } from "./components/Form";
import { TaskList } from "./components/TaskList";
import { useState, useEffect } from "react"

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({});

  useEffect(() => {
    const getLocalStorageTask = () => {
      const localStorageTasks = 
        JSON.parse(localStorage.getItem("tasks")) ?? [];
      setTasks(localStorageTasks);
    };
    getLocalStorageTask();
  },[]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify( tasks ));
  },[tasks])

  const deleteTask = ( id ) => {
    const updateTask = tasks.filter( (task) => task.id !== id );
    setTasks(updateTask);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form
          task = { task }
          tasks = { tasks }
          setTasks={ setTasks }
          setTask = { setTask }
        />
        <TaskList 
          tasks={ tasks }
          setTask={ setTask }
          deleteTask = { deleteTask }
        />
      </div>
    </div>
  );

}

export default App
