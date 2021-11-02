import React from "react";
import TaskComponent from "../components/Task";
import { useParams } from "react-router-dom";

const Task = () => {
  let { dayId } = useParams();

  return (
    <main>
      <TaskComponent dayId={parseInt(dayId)} />
    </main>
  );
};

export default Task;
