import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./master/dashboard";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
document.getElementById("root")
  ? ReactDOM.render(
      <Dashboard>
        <Home />
      </Dashboard>,
      document.getElementById("root")
    )
  : document.getElementById("profile")
  ? ReactDOM.render(
      <Dashboard>
        <Profile />
      </Dashboard>,
      document.getElementById("profile")
    )
  : null;
