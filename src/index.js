import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Dashboard from "./core/Dashboard";
import Search from "./screens/Search";
import Documentation from "./screens/Documentation";
import Invoices from "./screens/Invoices";
import AnalyticalReports from "./screens/AnalyticalReports";

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
  : document.getElementById("search")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Search">
          <Search />
        </Dashboard>
      </Suspense>,
      document.getElementById("search")
    )
  : document.getElementById("documentation")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Documentation">
          <Documentation />
        </Dashboard>
      </Suspense>,
      document.getElementById("documentation")
    )
  : document.getElementById("invoices")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Invoices">
          <Invoices />
        </Dashboard>
      </Suspense>,
      document.getElementById("invoices")
    )
  : document.getElementById("analyticalReports")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="AnalyticalReports">
          <AnalyticalReports />
        </Dashboard>
      </Suspense>,
      document.getElementById("analyticalReports")
    )
  : null;
AnalyticalReports;
