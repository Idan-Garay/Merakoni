import React, { useState, useReducer } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import TaskPage from "./pages/Task";
import Report from "./pages/Report";
import { Switch, Route, useParams } from "react-router-dom";

export const TasksContext = React.createContext();

const types = {
  addTask: "ADD TASK",
  deleteTask: "DELETE TASK",
  editTask: "EDIT TASK",
};

// const reducer = (state, action) => {
//   const { addTask, deleteTask, editTask } = types;
//   switch (action.type) {
//     case addTask:
//       console.log("addTask");
//     case deleteTask:
//       console.log("deleteTask");
//     case editTask:
//       console.log("editTask");
//   }
// };

const App = () => {
  const [currDate, setCurrDate] = useState(new Date().getDay());
  const [days, setDays] = useState([
    {
      id: 1,
      name: "Sunday",
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
      ],
      date: null,
    },
    {
      id: 2,
      name: "Monday",
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
      ],
      date: null,
    },
    {
      id: 3,
      name: "Tuesday",
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
      ],
      date: null,
    },
    {
      id: 4,
      name: "Wednesday",
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
      ],
      date: null,
    },
    {
      id: 5,
      name: "Thursday",
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
      ],
      date: null,
    },
    {
      id: 6,
      name: "Friday",
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
      ],
      date: null,
    },
    {
      id: 7,
      name: "Saturday",
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
      ],
      date: null,
    },
  ]);
  // const [state, dispatch] = useReducer(reducer, days);
  const [dayId, setDayId] = useState(-1);

  return (
    <div id="app">
      <NavBar />
      <TasksContext.Provider value={{ days, setDayId }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/report">
            <Report />
          </Route>
          <Route path="/day/:dayId">
            <TaskPage />
          </Route>
        </Switch>
      </TasksContext.Provider>
    </div>
  );
};

export default App;
