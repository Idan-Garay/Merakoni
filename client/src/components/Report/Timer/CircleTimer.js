import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const renderTime = (dimension, time, seconds) => {
  return (
    <div className="time-wrapper">
      <div className="time">
        {time}:{seconds}
      </div>
    </div>
  );
};

const CircleTimer = (props) => {
  return (
    <CountdownCircleTimer {...props} size={350} trailStrokeWidth={3}>
      {({ remainingTime }) =>
        renderTime(
          "minutes",
          Math.floor(remainingTime / 60),
          remainingTime % 60
        )
      }
    </CountdownCircleTimer>
  );
};

export default CircleTimer;
