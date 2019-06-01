import React from 'react';
/** Layouts **/  
import LoginLayoutRoute from "./components/LoginLayout";  
import DashboardRoute from "./components/DashboardLayout";  

// import { Route } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'; 


import Counter from './components/Counter';
import FetchData from './components/FetchData';

export default () => (
  <div>
      <Router>  
        <Switch>  
          <Route exact path="/">  
            <Redirect to="/counter" />  
          </Route>  
          <LoginLayoutRoute path='/counter' component={Counter} />  
          <DashboardRoute path='/fetch-data/:startDateIndex?' component={FetchData} />
          </Switch>  
      </Router>  
    );  
</div>
  // <Layout>
  //   <Route exact path='/' component={Home} />
  //   <Route path='/counter' component={Counter} />
  //   <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
  // </Layout>
);
