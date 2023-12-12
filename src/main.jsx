import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Anecdote from "./Temp.jsx";
import Activity from "./Activity.jsx";

const notes = [
  {
    id: 1,
    content: "HTML is easy.",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript.",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP Protocol.",
    important: true,
  },
  {
    id: 4,
    content: "Back-end programming is harder than front-end.",
    important: true,
  },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Anecdote />
    <Activity />
    <App notes={notes} />
  </React.StrictMode>
);
