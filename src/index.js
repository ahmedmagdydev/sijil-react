import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Dashboard from "./core/Dashboard";

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
  : document.getElementById("login")
  ? ReactDOM.render(<Login />, document.getElementById("login"))
  : null;
