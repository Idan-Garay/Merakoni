import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));

export const getTotalDays = (tasks) => {
  const accomplishedTasks = Array.from(tasks).filter(
    (task) => task.date_accomplished.length != 0
  );
  const prevTaskDates = [];

  const totalDays = accomplishedTasks.filter(
    (task) => prevTaskDates.findIndex(task.date_accomplished) == -1
  );
  return totalDays.length;
};

export const getToday = () => {
  return dayjs().format("MM/DD/YYYY");
};

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
    if (task.todo_date.length !== 0) {
      const taskDay = dayjs(task.todo_date);
      if (taskDay.isBetween(startOfWeek, endOfWeek, null, "[]")) {
        const dayName = taskDay.format("dddd");
        days[dayName].push(task);
      }
    }
  });
  return days;
};

export const getTasksWithinDay = (tasks, dayName) => {
  let dayTasks = [];

  const taskDay = getDayFromDayName(dayName);

  dayTasks = tasks.filter((task) =>
    dayjs(task.todo_date).isSame(taskDay, "day")
  );
  return dayTasks;
};

export const getDayFromDayName = (dayName) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayN = days.findIndex((day) => day === dayName);
  if (dayN !== -1) {
    dayN = dayjs().day(dayN);
  } else {
    console.log("error dayN is -1");
  }
  return dayN;
};

export const getDayName = (date) => {
  return dayjs(date).format("dddd");
};
