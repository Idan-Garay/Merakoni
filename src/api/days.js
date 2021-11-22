import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));

export const getTasksWithinCurrentWeek = (tasks) => {
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");

  const days = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };

  tasks.forEach((task) => {
    const taskDay = dayjs(task.todo_date);
    if (taskDay.isBetween(startOfWeek, endOfWeek, null, "[]")) {
      const dayName = taskDay.format("dddd");
      days[dayName].push(task);
    }
  });
  return days;
};

export const getDayName = (date) => {
  return dayjs(date).format("dddd");
};
