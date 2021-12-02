import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//private

import HomeRoute from "./components/routing/HomeRoute";

import UserRoute from "./components/routing/UserRoute";

//pages

import User from "./components/pages/User";

import Home from "./components/pages/Home";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <UserRoute exact path="/user" component={User} />

          <HomeRoute path="/home" component={Home} />

          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route
            exact
            path="/passwordreset/:resetToken"
            component={ResetPassword}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
