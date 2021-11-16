import React from "react";
import TaskList from "../components/TaskList";
import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import "../components/Task.css";
import * as dayjs from "dayjs";

const TaskPage = () => {
  let { id } = useParams();
  const { days } = React.useContext(TasksContext);
  const tasks = id
    ? days
        .filter((day, index) => {
          return day.dayId.isSame(dayjs().day(id), "day");
        })
        .flatMap((day) => day.tasks)
    : days.flatMap((day) => day.tasks);

  console.log(tasks.length);

  return (
    <main>
      <div id="tasks">
        <TaskList taskData={tasks} />
      </div>
    </main>
  );
};

export default TaskPage;
