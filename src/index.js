import '@babel/polyfill';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
const Home = React.lazy(() => import('./screens/Home'));
const TransferOfRights = React.lazy(() => import('./screens/services-screens/TransferOfRights'));
const GeneralEnquiry = React.lazy(() => import('./screens/services-screens/GeneralEnquiry'));
const ContractDetails = React.lazy(() => import('./screens/services-screens/ContractDetails'));
const Profile = React.lazy(() => import('./screens/Profile'));
const Login = React.lazy(() => import('./screens/Login'));
const Dashboard = React.lazy(() => import('./core/Dashboard'));
const Search = React.lazy(() => import('./screens/Search'));
const Documentation = React.lazy(() => import('./screens/Documentation'));
const Invoices = React.lazy(() => import('./screens/Invoices'));
const Responses = React.lazy(() => import('./screens/Responses'));
const AnalyticalReports = React.lazy(() => import('./screens/AnalyticalReports'));
const Services = React.lazy(() => import('./screens/Services'));
const Users = React.lazy(() => import('./screens/Users'));

document.getElementById('root')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="dashboard">
          <Home />
        </Dashboard>
      </Suspense>,
      document.getElementById('root'),
    )
  : document.getElementById('profile')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="profile">
          <Profile />
        </Dashboard>
      </Suspense>,
      document.getElementById('profile'),
    )
  : document.getElementById('login')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>,
      document.getElementById('login'),
    )
  : document.getElementById('search')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="search">
          <Search />
        </Dashboard>
      </Suspense>,
      document.getElementById('search'),
    )
  : document.getElementById('documentation')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="documentation">
          <Documentation />
        </Dashboard>
      </Suspense>,
      document.getElementById('documentation'),
    )
  : document.getElementById('invoices')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="invoices">
          <Invoices />
        </Dashboard>
      </Suspense>,
      document.getElementById('invoices'),
    )
  : document.getElementById('responses')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="responses">
          <Responses />
        </Dashboard>
      </Suspense>,
      document.getElementById('responses'),
    )
  : document.getElementById('analyticalReports')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="AnalyticalReports">
          <AnalyticalReports />
        </Dashboard>
      </Suspense>,
      document.getElementById('analyticalReports'),
    )
  : document.getElementById('services')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="services">
          <Services />
        </Dashboard>
      </Suspense>,
      document.getElementById('services'),
    )
  : document.getElementById('users')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="users">
          <Users />
        </Dashboard>
      </Suspense>,
      document.getElementById('users'),
    )
  : document.getElementById('transferOfRights')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Services.transferOfRights">
          <TransferOfRights />
        </Dashboard>
      </Suspense>,
      document.getElementById('transferOfRights'),
    )
  : document.getElementById('generalEnquiry')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Services.generalEnquiry">
          <GeneralEnquiry />
        </Dashboard>
      </Suspense>,
      document.getElementById('generalEnquiry'),
    )
  : document.getElementById('contractDetails')
  ? ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard title="Services.contractDetails">
          <ContractDetails />
        </Dashboard>
      </Suspense>,
      document.getElementById('contractDetails'),
    )
  : null;
AnalyticalReports;
