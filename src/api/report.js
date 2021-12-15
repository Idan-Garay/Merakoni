import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));
dayjs.extend(require("dayjs/plugin/dayOfYear"));

// Days streak methods

export const getUniqueDays = (tasks) => {
  const DateSet = new Set();
  tasks.forEach((task) => {
    if (task.date_accomplished.length > 0)
      DateSet.add(dayjs(task.date_accomplished).dayOfYear());
  });
  return Array.from(DateSet).sort();
};

export const getLongestStreak = (tasks) => {
  console.log("tasks", tasks);
  const NDays = getUniqueDays(tasks);
  console.log(NDays);
  let count = 1;
  let streak = 0;
  Array.from(NDays).reduce((prev, curr) => {
    count = Math.abs(prev - curr) === 1 ? count + 1 : 1;
    if (count > streak) streak = count;
    return curr;
  }, 1);

  console.log(streak);
  return streak;
};

export const getTotalDaysDone = (tasks) => {
  return getUniqueDays(tasks).length;
};
//end

// methods for getting tasks within day, week, month
export const getTasksOfToday = (tasks) => {
  const today = dayjs().format("MM/DD/YYYY");
  const res = tasks.filter((task) => task.todo_date === today);

  return res;
};

export const getTasksByWeek = (tasks) => {
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");

  const res = tasks.filter((task) =>
    dayjs(task.todo_date).isBetween(startOfWeek, endOfWeek, null, "[]")
  );

  return res;
};

export const getTasksByMonth = (tasks) => {
  const startOfMonth = dayjs().startOf("month");
  const endOfMonth = dayjs().endOf("month");

  const res = tasks.filter((task) =>
    dayjs(task.todo_date).isBetween(startOfMonth, endOfMonth, null, "[]")
  );

  return res;
};

// end

// methods for getting tasks within day, week, month

export const getFocusedTime = (entries) => {
  let res = 0;

  Array.from(entries).forEach((entry) => {
    res += getTimeDuration(entry);
  });

  return res;
};

export const getTimeDuration = (entry) => {
  const timeStarted = dayjs(entry.time_started);
  const timeEnded = dayjs(entry.time_ended);
  const res = timeEnded.subtract(timeStarted.get("m"), "m").get("m");
  return res;
};

export const getEntriesOfToday = (entries) => {
  const today = dayjs().format("MM/DD/YYYY");

  const res = entries.filter(
    (entry) => dayjs(entry.time_ended).format("MM/DD/YYYY") === today
  );
  return res;
};

export const getEntriesByWeek = (entries) => {
  const startOfWeek = dayjs().startOf("week");
  const endOfWeek = dayjs().endOf("week");

  const res = entries.filter((entry) => {
    return dayjs(entry.time_ended).isBetween(
      startOfWeek,
      endOfWeek,
      null,
      "[]"
    );
  });
  return res;
};

export const getEntriesByMonth = (entries) => {
  const startOfMonth = dayjs().startOf("month");
  const endOfMonth = dayjs().endOf("month");

  const res = entries.filter((entry) =>
    dayjs(entry.time_ended).isBetween(startOfMonth, endOfMonth, null, "[]")
  );
  return res;
};
// end

export const getStreakOfLabel = (tasks, label) => {
  const streak = getLongestStreak(getUniqueDaysOfTasks(tasks, label));
  return streak;
};

export const getUniqueDaysOfTasks = (tasks) => {
  //focus on date since it's the relevant prop it needs.
  const LTasks = getEntriesofLabel(tasks, label);
  const DateSet = new Set();
  LTasks.forEach((task) => {
    if (task.date_accomplished.length > 0)
      DateSet.add(dayjs(task.date_accomplished).dayOfYear());
  });

  return Array.from(DateSet).sort();
};

export const AverageHabitCompletion = (entries, tasks, label) => {
  entries = Array.from(entries).filter((entry) => entry.label === label);
  tasks = Array.from(tasks).filter((task) => task.label === label);
  const totalTime = Array.from(entries).reduce(
    (prev, curr) => getTimeDuration(prev) + getTimeDuration(curr),
    0
  );

  return totalTime / tasks.length;
};

export const averageHabitCompletionByDay = (entries) => {
  const today = dayjs().format("MM/DD/YYYY");

  const res = tasks.filter((task) => task.todo_date === today);
  const avg = Array.from(res).reduce(
    (prev, curr) => getTimeDuration(prev) + getTimeDuration(curr),
    0
  );
  return res / res.length;
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
  return tasks.filter((task) => {
    return (
      task.date_accomplished !== undefined &&
      task.date_accomplished.length !== 0
    );
  });
};

export const transformDate = (date) => {
  return dayjs(date).format("");
};
