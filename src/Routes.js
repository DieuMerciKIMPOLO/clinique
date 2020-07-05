import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import SignUp from "./components/users/Signup";
import SignIn from "./components/users/Signin";

export function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
        </Switch>
    </Router>
  );
}
