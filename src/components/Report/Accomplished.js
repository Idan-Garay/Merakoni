import React, { useEffect, useState } from "react";

const Accomplished = ({ tasks }) => {
  const [accomplished, setAccomplished] = useState([]);

  useEffect(() => {
    setAccomplished(tasks.filter((task) => task.done === true));

    return new AbortController().abort();
  }, []);

  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        maxWidth: "100%",
        padding: "1em",
        width: "3em",
      }}
    >
      <h2>
        {accomplished.length}/{tasks.length}
      </h2>
    </div>
  );
};

export default Accomplished;
