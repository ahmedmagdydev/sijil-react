import '@babel/polyfill';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import Loader from './components/framework/Loader';
const Home = React.lazy(() => import('./screens/Home'));
const TransferOfRights = React.lazy(() => import('./screens/services-screens/TransferOfRights'));
const GeneralEnquiry = React.lazy(() => import('./screens/services-screens/GeneralEnquiry'));
const ContractDetails = React.lazy(() => import('./screens/services-screens/ContractDetails'));
const RequestRepossession = React.lazy(() =>
  import('./screens/services-screens/RequestRepossession'),
);
const CancelRepossession = React.lazy(() =>
  import('./screens/services-screens/CancelRepossession'),
);
const CancelEnforcement = React.lazy(() => import('./screens/services-screens/CancelEnforcement'));
const ContractAmendment = React.lazy(() => import('./screens/services-screens/ContractAmendment'));
const CancelToR = React.lazy(() => import('./screens/services-screens/CancelToR'));
const RequestToR = React.lazy(() => import('./screens/services-screens/RequestToR'));
const RequestEnforcement = React.lazy(() =>
  import('./screens/services-screens/RequestEnforcement'),
);
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

// TODO Ahmad please make this a switch statement and don't repeat code

document.getElementById('root')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="dashboard">
          <Home />
        </Dashboard>
      </Suspense>,
      document.getElementById('root'),
    )
  : document.getElementById('profile')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="profile">
          <Profile />
        </Dashboard>
      </Suspense>,
      document.getElementById('profile'),
    )
  : document.getElementById('login')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>,
      document.getElementById('login'),
    )
  : document.getElementById('search')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="search">
          <Search />
        </Dashboard>
      </Suspense>,
      document.getElementById('search'),
    )
  : document.getElementById('documentation')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="documentation">
          <Documentation />
        </Dashboard>
      </Suspense>,
      document.getElementById('documentation'),
    )
  : document.getElementById('invoices')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="invoices">
          <Invoices />
        </Dashboard>
      </Suspense>,
      document.getElementById('invoices'),
    )
  : document.getElementById('responses')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="responses">
          <Responses />
        </Dashboard>
      </Suspense>,
      document.getElementById('responses'),
    )
  : document.getElementById('analyticalReports')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="AnalyticalReports">
          <AnalyticalReports />
        </Dashboard>
      </Suspense>,
      document.getElementById('analyticalReports'),
    )
  : document.getElementById('services')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="services">
          <Services />
        </Dashboard>
      </Suspense>,
      document.getElementById('services'),
    )
  : document.getElementById('users')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="users">
          <Users />
        </Dashboard>
      </Suspense>,
      document.getElementById('users'),
    )
  : document.getElementById('transferOfRights')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.transferOfRights">
          <TransferOfRights />
        </Dashboard>
      </Suspense>,
      document.getElementById('transferOfRights'),
    )
  : document.getElementById('generalEnquiry')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.generalEnquiry">
          <GeneralEnquiry />
        </Dashboard>
      </Suspense>,
      document.getElementById('generalEnquiry'),
    )
  : document.getElementById('contractDetails')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.contractDetails">
          <ContractDetails />
        </Dashboard>
      </Suspense>,
      document.getElementById('contractDetails'),
    )
  : document.getElementById('requestRepossession')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.requestRepossession">
          <RequestRepossession />
        </Dashboard>
      </Suspense>,
      document.getElementById('requestRepossession'),
    )
  : document.getElementById('cancelRepossession')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.cancelRepossession">
          <CancelRepossession />
        </Dashboard>
      </Suspense>,
      document.getElementById('cancelRepossession'),
    )
  : document.getElementById('cancelEnforcement')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.cancelEnforcement">
          <CancelEnforcement />
        </Dashboard>
      </Suspense>,
      document.getElementById('cancelEnforcement'),
    )
  : document.getElementById('cancelToR')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.cancelToR">
          <CancelToR />
        </Dashboard>
      </Suspense>,
      document.getElementById('cancelToR'),
    )
  : document.getElementById('contractAmendment')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.contractAmendment">
          <ContractAmendment />
        </Dashboard>
      </Suspense>,
      document.getElementById('contractAmendment'),
    )
  : document.getElementById('requestToR')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.requestToR">
          <RequestToR />
        </Dashboard>
      </Suspense>,
      document.getElementById('requestToR'),
    )
  : document.getElementById('requestEnforcement')
  ? ReactDOM.render(
      <Suspense fallback={<Loader />}>
        <Dashboard title="Services.requestEnforcement">
          <RequestEnforcement />
        </Dashboard>
      </Suspense>,
      document.getElementById('requestEnforcement'),
    )
  : null;
AnalyticalReports;
