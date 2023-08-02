import "./styles.css";
import { Todo } from "./Components/Todo";
import React from "react";
import { Routes } from "./Components/Routes";

export default function App() {
  return (
    <div className="App">
      <h1>
        <Routes />
      </h1>
    </div>
  );
}
