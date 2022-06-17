import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LayOut from './components/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Enquiry from './pages/Enquiry';
import Payment from './pages/payment';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <Router>
        <LayOut>
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/enquiry' component={Enquiry} />
            <Route path='/payment' component={Payment} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </LayOut>
      </Router>
    </>
  );
}

export default App;
