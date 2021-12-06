import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));

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
