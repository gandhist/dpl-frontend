import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Index";
import Profile from "./components/myProfile/Index";
import Order from "./components/Order/Index";
import ChangePassword from "./components/changePassword/Index";
import NotFound from "./components/templates/NotFound";

const App = () =>{
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/change-password">
          <ChangePassword />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
