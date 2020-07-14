import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import SignUp from "./components/users/Signup";
import SignIn from "./components/users/Signin";
import Dashboard from "./components/dashboard";

export function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
    </Router>
  );
}
