import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));

const week = [
  {
    dayId: dayjs("31/10/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 1,
        description:
          "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
        label: "Aquamarine",
        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 2,
        description:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        label: "Fuscia",
        date_created: "10/30/2021",
        date_accomplished: "",
      },
      {
        taskId: 3,
        description:
          "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
        label: "Pink",
        date_created: "10/30/2021",
        date_accomplished: "10/31/2021",
      },
      {
        taskId: 4,
        description: "Quisque ut erat.",
        label: "Goldenrod",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
    ],
  },
  {
    dayId: dayjs("01/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 5,
        description:
          "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
        label: "Pink",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
      {
        taskId: 6,
        description:
          "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
        label: "Yellow",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
      {
        taskId: 7,
        description:
          "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
        label: "Goldenrod",
        date_created: "10/30/2021",
        date_accomplished: "",
      },
      {
        taskId: 8,
        description:
          "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
        label: "Indigo",
        date_created: "10/30/2021",
        date_accomplished: "10/31/2021",
      },
    ],
  },
  {
    dayId: dayjs("02/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 9,
        description:
          "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
        label: "Orange",

        date_created: "10/30/2021",
        date_accomplished: "",
      },
      {
        taskId: 10,
        description:
          "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
        label: "Red",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
      {
        taskId: 11,
        description:
          "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        label: "Fuscia",

        date_created: "10/30/2021",
        date_accomplished: "",
      },
      {
        taskId: 12,
        description:
          "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
        label: "Indigo",

        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 13,
        description:
          "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        label: "Turquoise",

        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 14,
        description:
          "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
        label: "Blue",

        date_created: "10/30/2021",
        date_accomplished: "10/31/2021",
      },
      {
        taskId: 15,
        description:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
        label: "Maroon",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
      {
        taskId: 16,
        description:
          "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
        label: "Purple",

        date_created: "10/30/2021",
        date_accomplished: "10/31/2021",
      },
    ],
  },
  {
    dayId: dayjs("03/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 17,
        description:
          "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        label: "Aquamarine",

        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 18,
        description:
          "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        label: "Blue",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
    ],
  },
  {
    dayId: dayjs("04/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 17,
        description:
          "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        label: "Aquamarine",

        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 18,
        description:
          "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        label: "Blue",

        date_created: "10/30/2021",
        date_accomplished: "",
      },
    ],
  },
  {
    dayId: dayjs("05/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 17,
        description:
          "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        label: "Aquamarine",

        date_created: "10/30/2021",
        date_accomplished: "",
      },
      {
        taskId: 18,
        description:
          "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        label: "Blue",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
    ],
  },
  {
    dayId: dayjs("06/11/2021", "DD/MM/YYYY"),
    tasks: [
      {
        taskId: 17,
        description:
          "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
        label: "Aquamarine",

        date_created: "10/30/2021",
        date_accomplished: "11/1/2021",
      },
      {
        taskId: 18,
        description:
          "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
        label: "Blue",

        date_created: "10/30/2021",
        date_accomplished: "10/30/2021",
      },
    ],
  },
];

export default week.map((day) => {
  day.dayId = dayjs().day(day.dayId.day());
  day.tasks.map((task) => {
    const { date_created, date_accomplished } = task;
    task.date_created = dayjs().day(dayjs(date_created).day());
    task.date_accomplished = dayjs().day(dayjs(date_accomplished).day());
    return task;
  });
  return day;
});

// 1. Traverse days
// 2. update day
// 3. traverse tasks
// 4. update task dates (date -> dayjs -> date)

export const tasks = [
  {
    taskId: 1,
    description:
      "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    label: "Aquamarine",
    date_created: "10/30/2021",
    todo_date: "10/31/2021",
    date_accomplished: "11/1/2021",
  },
  {
    taskId: 2,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    label: "Fuscia",
    date_created: "10/30/2021",
    todo_date: "10/31/2021",
    date_accomplished: "",
  },
  {
    taskId: 3,
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    label: "Pink",
    date_created: "10/30/2021",
    todo_date: "10/30/2021",
    date_accomplished: "10/31/2021",
  },
];
