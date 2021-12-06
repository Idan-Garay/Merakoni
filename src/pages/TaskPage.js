import React, { useEffect, useMemo, useState } from "react";
import TaskList from "../components/TaskList";
import { useParams, useLocation } from "react-router-dom";
import { TasksContext } from "../App";
import "../components/Task.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const TaskPage = (props) => {
  let { day } = useParams();
  let { tasks, dispatch } = React.useContext(TasksContext);

  return (
    <main>
      <div id="tasks">
        <TaskList taskData={tasks} dispatch={dispatch} dayName={day} />
      </div>
    </main>
  );
};

export default TaskPage;
