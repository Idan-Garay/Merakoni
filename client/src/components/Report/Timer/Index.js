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
      const time_ended = dayjs().add(state.interval, "minutes").toISOString();
      const { addTimeEntry } = action;
      state.time_ended = time_ended;
      console.log(state);
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
    case "ACCELERATE TIME": {
      const { time } = action;
      state.interval = time;
      return { ...state };
    }
    case "RESTART TIME": {
      const { value } = action;
      state = { ...state, ...value };
      console.log("he;;", state);
      return state;
    }
    default:
      return state;
  }
};

const Index = ({ addTimeEntry }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [toggleTimer, setToggleTimer] = useState(false);
  const [labels, setLabels] = useState(["Study", "Homework", "Work", "Others"]);
  let [accel, setAccel] = useState(0);

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

  const restartTimer = () => {
    dispatch({
      type: "RESTART TIME",
      value: {
        time_started: "",
        time_ended: "",
        interval: getTimeMinutes(state.interval),
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
    dispatch({ type: "ACCELERATE TIME", time: 1 });
    setAccel(accel === 0 ? 1 : 0);
  };

  useEffect(() => {
    return () => {
      restartTimer();
    };
  }, [accel]);

  return (
    <>
      <button onClick={accelarate}>Accelerate</button>
      <div className="timer-box">
        <div className="details">
          <p></p>
          <p>Task accomplished: </p>
          <p>Remaining Tasks:</p>
          <p></p>
        </div>
        <CircleTimer
          key={accel}
          colors={[["#EF798A"]]}
          duration={state.interval}
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
