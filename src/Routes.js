import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import SignUp from "./components/users/Signup";

export function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={SignUp}/>
        </Switch>
    </Router>
  );
}
