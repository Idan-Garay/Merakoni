import React from "react";
import Badges from "../components/Badges/Badges";

const Badge = ({ tasks }) => {
  return (
    <Badges
      tasks={tasks.filter((task) => task.date_accomplished.length != 0)}
    />
  );
};

export default Badge;
