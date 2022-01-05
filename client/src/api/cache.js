import dayjs from "dayjs";

export const uploadIntoCurrentWeek = () => {
  let tasks = tasksCache.map((task) => {
    const pick = Math.floor(Math.random() * 100 + 1) % 7;
    task.todo_date = dayjs().day(pick).format("MM/DD/YYYY");
    task.date_accomplished = "";
    return task;
  });
  return tasks;
};

export const tasksCache = [
  {
    taskId: 1,
    description: "Cook Food",
    label: "Personal",
    date_created: "12/12/2021",
    todo_date: "12/26/2021",
    date_accomplished: "12/26/2021",
  },
  {
    taskId: 2,
    description: "Study Code",
    label: "Study",
    date_created: "12/12/2021",
    todo_date: "12/27/2021",
    date_accomplished: "12/27/2021",
  },
  {
    taskId: 3,
    description: "Eat ice cream",
    label: "Study",
    date_created: "12/14/2021",
    todo_date: "12/28/2021",
    date_accomplished: "12/28/2021",
  },
  {
    taskId: 4,
    description: "Take a run",
    label: "Exercise",
    date_created: "12/15/2021",
    todo_date: "12/29/2021",
    date_accomplished: "12/29/2021",
  },
  {
    taskId: 5,
    description: "Go Fishing",
    label: "Personal",
    date_created: "12/12/2021",
    todo_date: "12/29/2021",
    date_accomplished: "12/29/2021",
  },
  {
    taskId: 6,
    description: "Take the exam",
    label: "School",
    date_created: "12/30/2021",
    todo_date: "12/30/2021",
    date_accomplished: "",
  },
  {
    taskId: 7,
    description: "Go Boatriding",
    label: "Personal",
    date_created: "12/31/2021",
    todo_date: "12/31/2021",
    date_accomplished: "",
  },
  {
    taskId: 8,
    description: "Go Boatriding",
    label: "Personal",
    date_created: "01/01/2021",
    todo_date: "01/01/2021",
    date_accomplished: "",
  },
];

export const entriesCache = [
  {
    id: 1,
    time_started: dayjs("12/26/2021").minute(0).toISOString(),
    time_ended: dayjs("12/26/2021").minute(10).toISOString(),
    interval: 10,
    label: "Study",
    status: "done",
  },
  {
    id: 2,
    time_started: dayjs("12/27/2021").minute(0).toISOString(),
    time_ended: dayjs("12/27/2021").minute(20).toISOString(),
    interval: 20,
    label: "Personal",
    status: "done",
  },
  {
    id: 3,
    time_started: dayjs("12/28/2021").minute(0).toISOString(),
    time_ended: dayjs("12/28/2021").minute(15).toISOString(),
    interval: 15,
    label: "Study",
    status: "done",
  },
  {
    id: 4,
    time_started: dayjs("12/29/2021").minute(0).toISOString(),
    time_ended: dayjs("12/29/2021").minute(40).toISOString(),
    interval: 40,
    label: "Exercise",
    status: "done",
  },
  {
    id: 5,
    time_started: dayjs("12/30/2021").minute(0).toISOString(),
    time_ended: dayjs("12/30/2021").minute(10).toISOString(),
    interval: 10,
    label: "Meditate",
    status: "done",
  },
  {
    id: 6,
    time_started: dayjs("12/31/2021").minute(0).toISOString(),
    time_ended: dayjs("12/31/2021").minute(10).toISOString(),
    interval: 60,
    label: "Study",
    status: "done",
  },
  {
    id: 7,
    time_started: dayjs("01/01/2022").minute(0).toISOString(),
    time_ended: dayjs("01/01/2022").minute(10).toISOString(),
    interval: 10,
    label: "Study",
    status: "done",
  },
  {
    id: 8,
    time_started: dayjs("01/02/2022").minute(0).toISOString(),
    time_ended: dayjs("01/02/2022").minute(10).toISOString(),
    interval: 10,
    label: "Study",
    status: "done",
  },
];
