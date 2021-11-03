import React from "react";
import TaskComponent from "../components/Task";
import { useParams } from "react-router-dom";

const Task = () => {
  let { id } = useParams();

  return (
    <main>
      <TaskComponent id={parseInt(id)} />
    </main>
  );
};

export default Task;
