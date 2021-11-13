import React from "react";
import TaskList from '../components/TaskList';
import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import '../components/Task.css';

import Labels from '../components/Label';


const TaskPage = () => {
  let { id } = useParams();
  const { days } = React.useContext(TasksContext);

  return (
    <main>
      <div id="tasks">
        <TaskList/>
        {/* <Labels/> */}
      </div>
    </main>
  );
};

export default TaskPage;
