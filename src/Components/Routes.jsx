import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Todo } from "./Todo";
import { Task } from "./Task";
import { Completed } from "./Completed";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Todo />
        </Route>
        <Route exact path="/task/:id">
          <Task />
        </Route>

        <Route exact path="/comp">
          <Completed />
        </Route>
        <Route path="/error">
          <div>Error</div>
          <Link to="/">Home</Link>
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
