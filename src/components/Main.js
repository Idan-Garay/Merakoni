import React, { useState } from "react";
import "./Main.css";
import Utilities from "./Utilities";
import Day from "./Day";
import DayForm from "./DayForm";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  // 0 - 6 from sunday(0) to saturday(6)
  const [currDate, setCurrDate] = useState(new Date().getDay());
  const [days, setDays] = useState([
    { name: "Sunday", tasks: [], date: null },
    { name: "Monday", tasks: [], date: null },
    { name: "Tuesday", tasks: [], date: null },
    { name: "Wednesday", tasks: [], date: null },
    { name: "Thursday", tasks: [], date: null },
    { name: "Friday", tasks: [], date: null },
    { name: "Saturday", tasks: [], date: null },
  ]);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="main-section">
      <div className="left-content">
        <Utilities toggleModal={toggleModal} />
        <div className="days-section">
          {days.map((day, index) => (
            <Day day={day} key={index} />
          ))}
        </div>
      </div>
      <div className="right-content">calendar</div>
      {/* {showModal && <DayForm toggleModal={toggleModal} />}  makee it a page for functionality */}
    </main>
  );
};

export default Main;
