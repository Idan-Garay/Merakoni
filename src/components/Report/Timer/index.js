import React, { useState, useEffect, useReducer } from "react";
import CircleTimer from "./CircleTimer";
import Intervals from "./Interval";
import Labels from "./Labels";
import * as dayjs from "dayjs";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/toObject"));
dayjs.extend(require("dayjs/plugin/calendar"));

const getTimeMinutes = (time) => time * 60;

const initialState = {
  time_started: "",
  time_ended: "",
  interval: getTimeMinutes(10),
  label: "Study",
  status: "start",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START TIME": {
      const time_started = dayjs().toISOString();
      state.time_started = time_started;
      return { ...state };
    }
    case "STOP TIME": {
      // const time_ended = dayjs().toISOString();
      const time_ended = dayjs().add(state.interval, "minutes").toISOString();
      // console.log(time_ended);
      state.time_ended = time_ended;
      if (action.done) {
        state.status = "done";
        addTimeEntry(state);
      }
      return { ...state };
    }
    case "SET INTERVAL": {
      const { intervalInput } = action;
      const interval = getTimeMinutes(intervalInput);
      state.interval = interval;
      return { ...state };
    }
    case "CHANGE LABEL": {
      const { labelInput } = action;
      state.label = labelInput;
      return { ...state };
    }
    case "ACCELERATE": {
      const { time } = action;
      state.interval = time;
      return { ...state };
    }
    default:
      return state;
  }
};

const Timer = ({ addTimeEntry }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [labels, setLabels] = useState(["Study", "Homework", "Work", "Others"]);

  const changeInterval = (e) => {
    dispatch({
      type: "SET INTERVAL",
      intervalInput: parseInt(e.target.value),
    });
  };

  const handleStartTime = () => {
    dispatch({ type: "START TIME" });
    setToggleTimer(true);
  };

  const handleStopTime = () => {
    dispatch({ type: "STOP TIME" });
    setToggleTimer(false);
  };

  const handleOnComplete = () => {
    dispatch({ type: "STOP TIME", done: true, addTimeEntry: addTimeEntry });
  };

  const changeLabel = (e) => {
    dispatch({
      type: " CHANGE LABEL",
      label: e.target.value,
    });
  };

  const accelarate = () => {
    dispatch({ type: "ACCELARATE TIME", time: 1 });
  };

  return (
    <>
      <button onClick={accelarate}>Accelerate</button>
      <CircleTimer
        key={state.interval}
        colors={[["#EF798A"]]}
        duration={state.interval}
        isPlaying={toggleTimer}
        onComplete={handleOnComplete}
      />

      <div className="menu">
        <Intervals
          changeInterval={changeInterval}
          intervals={[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
        />
        {!toggleTimer ? (
          <button onClick={handleStartTime}>Start</button>
        ) : (
          <button onClick={handleStopTime}>Stop</button>
        )}

        <br />
        <Labels labels={labels} changeLabel={changeLabel} />
      </div>
    </>
  );
};

export default Timer;
