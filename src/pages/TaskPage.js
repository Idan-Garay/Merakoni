import React from "react";
import TaskList from "../components/TaskList";
// import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import "../components/Task.css";

import Labels from "../components/Label";

const TaskPage = () => {
  // let { id } = useParams();
  const { days } = React.useContext(TasksContext);
  const tasks = days.flatMap((day) => day.tasks);

  console.log("ey", tasks);
  return (
    <main>
      <div id="tasks">
        <TaskList taskData={tasks} />
        {/* <Labels taskData={tasks} /> */}
        {/* <Labels taskData={tasks} labelData={labels} /> */}
      </div>
    </main>
  );
};

export default TaskPage;
