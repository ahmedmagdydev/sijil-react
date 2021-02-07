import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./i18n";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Home from "./screens/Home";
const Home = React.lazy(() => import("./screens/Home"));
// import Profile from "./screens/Profile";

const Profile = React.lazy(() => import("./screens/Profile"));
// import Login from "./screens/Login";
const Login = React.lazy(() => import("./screens/Login"));
// import Dashboard from "./core/Dashboard";
const Dashboard = React.lazy(() => import("./core/Dashboard"));
// import Search from "./screens/Search";
const Search = React.lazy(() => import("./screens/Search"));
// import Documentation from "./screens/Documentation";
const Documentation = React.lazy(() => import("./screens/Documentation"));
// import Invoices from "./screens/Invoices";
const Invoices = React.lazy(() => import("./screens/Invoices"));
// import AnalyticalReports from "./screens/AnalyticalReports";
const AnalyticalReports = React.lazy(() =>
  import("./screens/AnalyticalReports")
);


// TODO Ahmad please make this a switch statement and don't repeat code
document.getElementById("root")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="dashboard">
          <Home />
        </Dashboard>
      </Suspense>,
      document.getElementById("root")
    )
  : document.getElementById("profile")
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="profile">
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
        <Dashboard title="search">
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
