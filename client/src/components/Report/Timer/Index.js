import React, { useState, useEffect, useReducer } from "react";
import CircleTimer from "./CircleTimer";
import Intervals from "./Interval";
import Labels from "./Labels";
import * as dayjs from "dayjs";
import { getDoneTasks } from "../../../api/days";
dayjs.extend(require("dayjs/plugin/customParseFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));
dayjs.extend(require("dayjs/plugin/toObject"));
dayjs.extend(require("dayjs/plugin/calendar"));
import axios from "axios";

const getTimeMinutes = (time) => time * 60;

const initialState = {
  time_started: "",
  time_ended: "",
  interval: 10,
  label: "Study",
  status: "start",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "START TIME": {
      const time_started = dayjs().toISOString();

      return { ...state, time_started: time_started };
    }
    case "STOP TIME": {
      let time_ended = dayjs().toISOString();

      if (action.done) {
        state.status = "done";
        time_ended = dayjs().add(state.interval, "minutes").toISOString();
      }
      return { ...state, time_ended: time_ended };
    }
    case "SET INTERVAL": {
      const { intervalInput } = action;
      const interval = getTimeMinutes(intervalInput);
      return { ...state, interval: interval };
    }
    case "CHANGE LABEL": {
      const { labelInput } = action;

      return { ...state, label: labelInput };
    }
    case "ACCELERATE TIME": {
      return { ...state, interval: 0.01 };
    }
    case "RESTART TIME": {
      const { value } = action;
      state = { ...state, ...value };
      return state;
    }
    default:
      return state;
  }
};

const Index = ({ tasks }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [labels, setLabels] = useState(["Study", "Homework", "Work", "Others"]);
  let [accel, setAccel] = useState(state.interval);

  const changeInterval = (e) => {
    dispatch({
      type: "SET INTERVAL",
      intervalInput: parseInt(e.target.value),
    });
    setAccel(parseInt(e.target.value));
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
    dispatch({ type: "STOP TIME", done: true });
    axios.post("http://localhost:5000/time", state).catch((err) => {
      console.log(err);
    });

    setAccel(state.interval);
    restartTimer();

    setToggleTimer(false);
  };

  const restartTimer = () => {
    dispatch({
      type: "RESTART TIME",
      value: {
        time_started: "",
        time_ended: "",
        interval: state.interval,
      },
    });
  };

  const changeLabel = (e) => {
    dispatch({
      type: "CHANGE LABEL",
      label: e.target.value,
    });
  };

  const accelarate = () => {
    dispatch({ type: "ACCELERATE TIME", time: 0.1 });
    setAccel(accel !== 0.01 ? 0.01 : state.interval);
  };

  return (
    <>
      {/* <button onClick={accelarate}>Accelerate</button> */}
      <div className="timer-box">
        <div className="details">
          <p></p>
          <p>Tasks accomplished: {getDoneTasks(tasks).length}</p>
          <p>Remaining Tasks: {tasks.length - getDoneTasks(tasks).length}</p>
          <p></p>
        </div>
        <CircleTimer
          key={accel}
          colors={[["#EF798A"]]}
          duration={getTimeMinutes(accel)}
          isPlaying={toggleTimer}
          onComplete={handleOnComplete}
        />
        {!toggleTimer ? (
          <button onClick={handleStartTime}>Start</button>
        ) : (
          <button onClick={handleStopTime}>Stop</button>
        )}

        <div className="menu">
          <Intervals
            changeInterval={changeInterval}
            intervals={[10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60]}
          />

          <br />
          <Labels labels={labels} changeLabel={changeLabel} />
        </div>
      </div>
    </>
  );
};

export default Index;
