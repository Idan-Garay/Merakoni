import React, { useState, useEffect } from "react";
import CircleTimer from "./CircleTimer";
import Intervals from "./Interval";
import Labels from "./Labels";
import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/toObject"));
dayjs.extend(require("dayjs/plugin/calendar"));

const getTimeMinutes = (time) => time * 60;

const Timer = ({ addToHistory }) => {
  const [timeStarted, setTimeStarted] = useState(null);
  const [timeEnded, setTimeEnded] = useState(null);
  const [interval, setInterval] = useState(getTimeMinutes(10));

  const [toggleTimer, setToggleTimer] = useState(false);
  const [labels, setLabels] = useState(["Study", "Homework", "Work", "Others"]);
  const [label, setLabel] = useState("Study");

  const changeInterval = (e) => {
    setInterval(getTimeMinutes(parseInt(e.target.value)));
  };

  const startTime = () => {
    // when timer starts history is being processed
    if (toggleTimer) {
      // history.time_end = dayjs().toISOString();
      setTimeEnded(dayjs(timeStarted).add(interval, "s").toISOString());
      const timePair = {
        time_start: timeStarted,
        time_end: dayjs(timeStarted).add(interval, "s").toISOString(),
        label: label,
      };
      addToHistory(timePair);
    } else {
      // history.time_start = dayjs().toISOString();
      setTimeStarted(dayjs().toISOString());
    }

    setToggleTimer(!toggleTimer);
  };

  React.useEffect(() => {
    // console.log(dayjs(timeStarted).toString(), dayjs(timeEnded).toString());

    return () => {
      // if (history.time_start != NULL) history.time_end = dayjs().toISOString();
      // if (timeStarted != NULL) history.time_end = dayjs().toISOString();
      new AbortController().abort();
    };
  }, [timeEnded]);

  const changeLabel = (e) => {
    setLabel(e.target.value);
  };

  return (
    <>
      <CircleTimer
        key={interval}
        colors={[["#EF798A"]]}
        duration={interval}
        isPlaying={toggleTimer}
      />

      <div className="menu">
        <Intervals
          changeInterval={changeInterval}
          intervals={[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
        />
        <button onClick={startTime}>{toggleTimer ? "stop" : "start"}</button>
        <br />
        <Labels labels={labels} changeLabel={changeLabel} />
      </div>
    </>
  );
};

export default Timer;
