import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/isBetween"));
dayjs.extend(require("dayjs/plugin/dayOfYear"));

// Days streak methods
export const getEntries = (entries, opt) => {
  let start = dayjs().startOf("month");
  let end = dayjs().endOf("month");

  if (opt === "m") {
  } else if (opt === "w") {
    start = dayjs().startOf("week");
    end = dayjs().endOf("week");
  } else if (opt === "d") {
    start = dayjs().startOf("day");
    end = dayjs().endOf("day");
  }

  return entries.filter((entry) =>
    dayjs(entry.time_ended).isBetween(start, end, null, "[]")
  );
};

export const getTasks = (tasks, opt) => {
  let start = dayjs().startOf("month");
  let end = dayjs().endOf("month");

  if (opt === "m") {
  } else if (opt === "w") {
    start = dayjs().startOf("week");
    end = dayjs().endOf("week");
  } else if (opt === "d") {
    start = dayjs().startOf("day");
    end = dayjs().endOf("day");
  }

  return tasks.filter((task) =>
    dayjs(task.date_accomplished).isBetween(start, end, null, "[]")
  );
};

export const Tasks = (entries) => {
  return Array.from(entries).filter(
    (entry) => entry.date_accomplished.length !== 0
  );
};

export const getTotalTasks = (entries) => {
  return Array.from(entries).length;
};

export const LongestStreak = (tasks) => {
  let streak = 0;
  let uniqueDays = new Set();

  Array.from(tasks).forEach((task) => {
    if (task.date_accomplished !== "")
      uniqueDays.add(dayjs(task.date_accomplished).dayOfYear());
  });

  uniqueDays = Array.from(uniqueDays).sort(
    (a, b) =>
      dayjs(a.date_accomplished).get("day") -
      dayjs(b.date_accomplished).get("day")
  );

  let count = 1;
  const res = Array.from(uniqueDays).reduce((prev, curr) => {
    count = Math.abs(prev - curr) === 1 ? count + 1 : 1;
    if (count > streak) streak = count;
    return curr;
  }, 1);

  return streak;
};

export const TotalDaysDone = (entries) => {
  const accTasks = entries.filter((entry) => entry.date_accomplished !== 0);
  const uniqueDays = new Set();

  Array.from(accTasks).forEach((task) => {
    if (task.date_accomplished !== "")
      uniqueDays.add(dayjs(task.date_accomplished).dayOfYear());
  });

  return Array.from(uniqueDays.values()).length;
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

export const getAccomplishedTasks = (tasks) => {
  return tasks.filter((task) => {
    return (
      task.date_accomplished !== undefined &&
      task.date_accomplished.length !== 0
    );
  });
};

export const FocusedTime = (entries) => {
  return Array.from(entries).reduce((prev, curr) => {
    return (
      prev +
      (dayjs(curr.time_ended).get("minutes") -
        dayjs(curr.time_started).get("minutes"))
    );
  }, 0);
};

export const getFocusedTimeByWeek = (entries) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekEntries = [[], [], [], [], [], [], []];
  let idx;

  Array.from(entries).forEach((entry) => {
    idx = dayjs(entry.time_ended).get("day");
    weekEntries[idx].push = entry;
  });

  weekEntries = weekEntries.map((dayEntries, index) => {
    return {
      key: days[index],
      data: FocusedTime(dayEntries),
    };
  });
  console.log(weekEntries, "hello");
  return weekEntries;
};
