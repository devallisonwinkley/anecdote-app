import React from "react";

function Total({ parts }) {
  return (
    <p>
      <strong>
        Total of{" "}
        {parts.reduce((a, b) => {
          return a + b.exercises;
        }, 0)}{" "}
        exercises
      </strong>
    </p>
  );
}

export default Total;
