import React, { useState, useReducer, useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/Task";
import Report from "./pages/Report";
import { Switch, Route } from "react-router-dom";
import * as dayjs from "dayjs";
import { render } from "react-dom";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));

export const TasksContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD TASK":
      console.log("addTask");
    case "DELETE TASK":
      console.log("deleteTask");
    case "EDIT TASK":
      console.log("editTask");
    case "DELETE DAY":
      const { value } = action;
      console.log(state[value], value);
      const { dayId } = state[value];
      return state.splice(value, 1, { dayId: dayId, tasks: [] });
  }
};

const App = () => {
  const [currDate, setCurrDate] = useState(dayjs().format("DD/MM/YYYY"));
  const [week, setWeek] = useState(
    [
      {
        dayId: "01/11/2021",
        tasks: [
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
        ],
      },
      {
        dayId: "31/10/2021",
        tasks: [
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
        ],
      },
      {
        dayId: "04/11/2021",
        tasks: [
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
          {
            taskID: 11,
            description:
              "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
            label: "Fuscia",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 12,
            description:
              "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.",
            label: "Indigo",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 13,
            description:
              "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
            label: "Turquoise",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 14,
            description:
              "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
            label: "Blue",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/31/2021",
          },
          {
            taskID: 15,
            description:
              "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
            label: "Maroon",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/30/2021",
          },
          {
            taskID: 16,
            description:
              "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
            label: "Purple",
            done: true,
            date_created: "10/30/2021",
            date_accomplished: "10/31/2021",
          },
        ],
      },
      {
        dayId: "05/11/2021",
        tasks: [
          {
            taskID: 17,
            description:
              "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            label: "Aquamarine",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 18,
            description:
              "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            label: "Blue",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/30/2021",
          },
        ],
      },
      {
        dayId: "02/11/2021",
        tasks: [
          {
            taskID: 17,
            description:
              "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            label: "Aquamarine",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 18,
            description:
              "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            label: "Blue",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/30/2021",
          },
        ],
      },
      {
        dayId: "03/11/2021",
        tasks: [
          {
            taskID: 17,
            description:
              "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            label: "Aquamarine",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 18,
            description:
              "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            label: "Blue",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/30/2021",
          },
        ],
      },
      {
        dayId: "06/11/2021",
        tasks: [
          {
            taskID: 17,
            description:
              "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
            label: "Aquamarine",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "11/1/2021",
          },
          {
            taskID: 18,
            description:
              "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
            label: "Blue",
            done: false,
            date_created: "10/30/2021",
            date_accomplished: "10/30/2021",
          },
        ],
      },
    ].sort((a, b) => a.dayId - b.dayId)
  );
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    const newWeek = [];
    let weekStart = dayjs().startOf("week");
    let weekEnd = dayjs().endOf("week");

    while (weekStart.isSameOrBefore(weekEnd, "day") === true) {
      newWeek.push({ dayId: weekStart, tasks: [] });
      weekStart = weekStart.add(1, "day");
    }

    week.forEach((day) => {
      newWeek[dayjs(day.dayId, "DD/MM/YYYY").get("day")].tasks = day.tasks;
    });

    // console.log(week);
    setRenderComponent(true);
    setWeek(newWeek);
  }, []);

  const [state, dispatch] = useReducer(reducer, week);

  return (
    <div id="app">
      <NavBar />
      <TasksContext.Provider value={{ days: week, dispatch }}>
        <Switch>
          <Route exact path="/">
            {renderComponent && <Home />}
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route path="/day/:id">
            <TaskPage />
          </Route>
        </Switch>
      </TasksContext.Provider>
    </div>
  );
};

export default App;
