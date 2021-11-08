import React from "react";
import TaskComponent from "../components/Task";
import { useParams } from "react-router-dom";
import { TasksContext } from "../App";

const Task = () => {
  let { id } = useParams();
  const { days } = React.useContext(TasksContext);

  return (
    <main>
      <TaskComponent day={days[id]} />
    </main>
  );
};

export default Task;
