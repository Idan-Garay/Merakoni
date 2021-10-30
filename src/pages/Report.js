import React from "react";
import Accomplished from "../components/Report/Accomplished";

const Report = () => {
  const tasks = [
    {
      taskID: 1,
      description:
        "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
      label: "Aquamarine",
      done: false,
      date_created: "10/30/2021",
      date_accomplished: "11/1/2021",
    },
    {
      taskID: 2,
      description:
        "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      label: "Fuscia",
      done: false,
      date_created: "10/30/2021",
      date_accomplished: "10/31/2021",
    },
    {
      taskID: 3,
      description:
        "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
      label: "Pink",
      done: true,
      date_created: "10/30/2021",
      date_accomplished: "10/31/2021",
    },
    {
      taskID: 4,
      description: "Quisque ut erat.",
      label: "Goldenrod",
      done: false,
      date_created: "10/30/2021",
      date_accomplished: "10/30/2021",
    },
    {
      taskID: 5,
      description:
        "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
      label: "Pink",
      done: false,
      date_created: "10/30/2021",
      date_accomplished: "10/30/2021",
    },
    {
      taskID: 6,
      description:
        "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
      label: "Yellow",
      done: false,
      date_created: "10/30/2021",
      date_accomplished: "10/30/2021",
    },
    {
      taskID: 7,
      description:
        "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
      label: "Goldenrod",
      done: true,
      date_created: "10/30/2021",
      date_accomplished: "11/1/2021",
    },
    {
      taskID: 8,
      description:
        "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
      label: "Indigo",
      done: true,
      date_created: "10/30/2021",
      date_accomplished: "10/31/2021",
    },
    {
      taskID: 9,
      description:
        "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
      label: "Orange",
      done: true,
      date_created: "10/30/2021",
      date_accomplished: "10/31/2021",
    },
    {
      taskID: 10,
      description:
        "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      label: "Red",
      done: true,
      date_created: "10/30/2021",
      date_accomplished: "10/30/2021",
    },
  ];
  return (
    <div>
      Report page
      <Accomplished tasks={tasks} />
    </div>
  );
};

export default Report;
