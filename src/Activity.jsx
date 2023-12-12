import { useState } from "react";
import React from "react";
import Course from "./components/Course";

const courses = [
  {
    name: "Half Stack application development",
    id: 1,
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass date",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 11,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: 2,
    parts: [
      {
        name: "Routing",
        exercises: 3,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
];

function Activity() {
  // const [courses, setCourses] = useState(props.courses);

  // const courseList = courses.map((course) => <li>{course}</li>);

  // const totalExercisesOne = useState(0);
  // const totalExercisesTwo = useState(0);

  return (
    <div>
      <h1>Web Development Curriculum</h1>
      <div>
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>

      {/* <h3>Half Stack Application Development</h3>
      <ul>
        {courses.map((course) => (
          <li key={course.parts}>{course.name}</li>
        ))}
      </ul> */}

      {/* {courses?.map((course) => {
        console.log(item);
      })} */}

      {/* <h4>{courses.map((course) => ({ course }))}</h4> */}

      {/* <ul> {courseList} </ul> */}
      {/* <h5>total of {totalExercisesOne} exercises</h5> */}

      {/* <h3>Node.JS</h3> */}
      {/* <ul>
        {courses?.map((course) => (
          <li key={course[1]}>{course.content}</li>
        ))}
      </ul>
      <h5>total of {totalExercisesTwo} exercises</h5> */}
    </div>
  );
}

export default Activity;
