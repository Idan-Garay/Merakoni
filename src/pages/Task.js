import React from "react";
import TodoList from '../components/TodoList';
import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import '../components/Task.css';


const Task = () => {
  let { id } = useParams();
  const { days } = React.useContext(TasksContext);

  return (
    <main>
      <div id="tasks">
        <TodoList/>
      </div>
    </main>
  );
};

export default Task;
