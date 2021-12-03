import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//private

import HomeRoute from "./components/routing/HomeRoute";

import UserRoute from "./components/routing/UserRoute";

import ProjectRoute from "./components/routing/ProjectRoute";


//pages

import User from "./components/pages/User";

import Home from "./components/pages/Home";
import Project from "./components/pages/Project";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/ResetPassword";
import userUpdate from"./components/pages/UserUpdate";
const App=()=> {
  return (
    <Router>

        <div>
<Switch>

 
  <UserRoute exact path="/user" component={User}/>
  <UserRoute exact path="/userUpdate" component={userUpdate}/>

<HomeRoute path="/home" component={Home} />
<ProjectRoute exact path="/project" component={Project}/>

<Route exact path="/login" component={Login}></Route>


<Route exact path="/register" component={Register}/>
<Route exact path="/forgotpassword" component={ForgotPassword}/>
<Route exact path="/passwordreset/:resetToken" component={ResetPassword}/>
</Switch>
</div>

      
    </Router>
 
  );
}

export default App;
