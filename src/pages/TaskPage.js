import React from "react";
import TaskList from "../components/TaskList";
// import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import "../components/Task.css";

const TaskPage = () => {
  // let { id } = useParams();
  const { days } = React.useContext(TasksContext);
  const tasks = days.flatMap((day) => day.tasks);

  return (
    <main>
      <div id="tasks">
        <TaskList taskData={tasks} />
      </div>
    </main>
  );
};

export default TaskPage;
