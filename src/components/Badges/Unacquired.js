import React from "react";

const Unacquired = ({ point, array }) => {
  const badges = array.map((badge, index) => {
    if (point < badge.point) {
      return (
        <div className="badges" key={index}>
          <img src={require(`./Images/${badge.src}.png`)} alt="" />
          <p>{badge.title}</p>
        </div>
      );
    }
  });
  return <div className="badgeList">{badges}</div>;
};

export default Unacquired;
