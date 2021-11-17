import React, { useEffect, useMemo } from "react";
import TaskList from "../components/TaskList";
import { useParams } from "react-router-dom";
import { TasksContext } from "../App";
import "../components/Task.css";
import * as dayjs from "dayjs";

const TaskPage = () => {
  let { id } = useParams();
  const { days } = React.useContext(TasksContext);
  // const [tasks, setTasks] = useState([]);
  const tasks = useMemo(() => {
    return id
      ? days
          .filter((day) => {
            return day.dayId.isSame(dayjs().day(id), "day");
          })
          .flatMap((day) => day.tasks)
      : days.flatMap((day) => day.tasks);
  }, [id]);

  // useEffect(() => {}, [tasks]);

  return (
    <main>
      <div id="tasks">
        <TaskList taskData={tasks} />
      </div>
    </main>
  );
};

export default TaskPage;
