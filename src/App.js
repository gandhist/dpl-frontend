import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/dashboard/Index";
import Profile from "./components/myProfile/Index";
import Order from "./components/Order/Index";
import ChangePassword from "./components/changePassword/Index";
import NotFound from "./components/templates/NotFound";
import Index from "./components/landingPage/index";
import Paket from "./components/landingPage/paket";
import Desain from "./components/landingPage/desain";
import { RecoilRoot } from 'recoil';
import Authenticated from "./components/middleware/Authenticated";

const App = () => {
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback="">
          <Switch>
            {/* for guest */}
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/" >
              <Index />
            </Route>
            <Route exact path="/paket" >
              <Paket />
            </Route>
            <Route exact path="/desain" >
              <Desain />
            </Route>
            {/* authenticated */}
            <Authenticated >

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
            </Authenticated>


            <Route path="*" component={NotFound} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  );
}

export default App;
