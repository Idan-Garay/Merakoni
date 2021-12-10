import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));

export const AverageHabitCompletion = (entries, tasks, label) => {
  console.table(entries);
  entries = Array.from(entries).filter((entry) => entry.label === label);
  tasks = Array.from(tasks).filter((task) => task.label === label);
  const totalTime = Array.from(entries).reduce(
    (prev, curr) => getTimeDuration(prev) + getTimeDuration(curr),
    0
  );

  console.log(totalTime, tasks.length, "hello");
  return totalTime / tasks.length;
};

export const getTimeDuration = (entry) => {
  const timeStarted = dayjs(entry.time_started);
  const timeEnded = dayjs(entry.time_ended);
  return timeEnded.subtract(timeStarted.get("m"), "m").get("m");
};

export const getTasksofLabel = (tasks, label) => {
  return Array.from(tasks).filter(
    (task) => task.label.toLowerCase() === label.toLowerCase()
  );
};

export const getEntriesofLabel = (entries, label) => {
  return Array.from(entries).filter(
    (entry) => entry.label.toLowerCase() === label.toLowerCase()
  );
};

// initializes heatMap by getting the tasks and transforming it to its own data
export const initializeHeatMap = (tasks) => {
  const accomplishedTasks = getAccomplishedTasks(tasks);
  const heatmapData = {};
  accomplishedTasks.forEach((task) => {
    const date = dayjs(task.date_accomplished).format("YYYY/MM/DD");
    if (heatmapData[date] === undefined) {
      heatmapData[date] = { count: 1 };
    } else {
      heatmapData[date].count++;
    }
  });
  return flattenHeatmapData(heatmapData);
};

export const flattenHeatmapData = (heatmapData) => {
  const data = Object.entries(heatmapData).map(([key, val]) => ({
    date: `${key}`,
    count: val.count,
  }));
  return data;
};

export const countAccomplishedTasks = (date, accomplishedTasks) => {
  const dayDate = dayjs(date);
  return accomplishedTasks.filter((task) =>
    dayjs(task.date_accomplished).isSame(dayDate, "day")
  ).length;
};

export const getAccomplishedTasks = (tasks) => {
  return tasks.filter(
    (task) =>
      task.date_accomplished !== undefined &&
      task.date_accomplished.length !== 0
  );
};

export const transformDate = (date) => {
  return dayjs(date).format("");
};

const x = [
  { date: "2021/01/11", count: 2 },
  { date: "2021/01/12", count: 20 },
  { date: "2021/01/13", count: 10 },
  ...[...Array(17)].map((_, idx) => ({
    date: `2021/02/${idx + 10}`,
    count: idx,
    content: "",
  })),
  { date: "2021/04/11", count: 2 },
  { date: "2021/05/01", count: 5 },
  { date: "2021/05/02", count: 5 },
  { date: "2021/05/04", count: 11 },
];
