import React from "react";
import Total from "./Total";
import Part from "./Part";

function Course({ course }) {
  return (
    <article>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map((part) => (
          <Part key={part.id} part={part} />
        ))}
      </ul>
      <Total parts={course.parts} />
    </article>
  );
}

export default Course;
