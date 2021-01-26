import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Dashboard from "./core/Dashboard";

document.getElementById("root")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Dashboard">
          <Home />
        </Dashboard>
      </Suspense>,
      document.getElementById("root")
    )
  : document.getElementById("profile")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Profile">
          <Profile />
        </Dashboard>
      </Suspense>,
      document.getElementById("profile")
    )
  : document.getElementById("login")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>,
      document.getElementById("login")
    )
  : null;
