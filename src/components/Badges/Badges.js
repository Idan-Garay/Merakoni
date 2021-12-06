import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Acquired from "./Acquired";
import Unacquired from "./Unacquired";
import "react-tabs/style/react-tabs.css";
import "./Badges.css";

function Badges({ tasks }) {
  const [point, setPoint] = useState(tasks.length);

  const array = [
    { id: 1, src: "badge1", title: "My First Task!", point: 1 },
    { id: 2, src: "badge2", title: "Success Badge", point: 2 },
    { id: 3, src: "badge3", title: "Adventurer", point: 5 },
    { id: 4, src: "badge4", title: "Good Habit", point: 10 },
    { id: 5, src: "badge5", title: "Master", point: 20 },
  ];

  return (
    <div className="badgePage">
      <h1>Task Points: {point}</h1>
      <Tabs>
        <TabList>
          <Tab>Acquired</Tab>
          <Tab>Unacquired</Tab>
        </TabList>

        <TabPanel>
          <Acquired point={point} array={array} />
        </TabPanel>
        <TabPanel>
          <Unacquired point={point} array={array} />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Badges;
