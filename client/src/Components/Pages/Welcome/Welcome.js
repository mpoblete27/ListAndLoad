import React from "react";
import { BrowserRouter as  Route } from "react-router-dom";
import Jumbotron from "../../Jumbotron";
import Authentication from "./Authentication/Authentication";
import Login from "./Login/Login";

const Welcome = () => {
  return (
    <div>
      <Jumbotron />
      <Authentication />
      <Route path="/Login" component={Login} />
      <Route path="*" component={Authentication} />
    </div>
  )
}

export default Welcome;