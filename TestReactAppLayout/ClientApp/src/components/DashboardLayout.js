import React, { Component } from 'react';  
import { Route } from 'react-router-dom';  
import { Container } from 'reactstrap';
import DashboardNavMenu from './DashboardNavMenu'; 

const DashboardLayout = ({children, ...rest}) => {  
  return (  
    <div className="page page-dashboard">  
      <DashboardNavMenu />
      <Container>
        {children}
      </Container>   
    </div>  
  )  
}  
  
const DashboardLayoutRoute = ({component: Component, ...rest}) => {  
  return (  
    <Route {...rest} render={matchProps => (  
      <DashboardLayout>  
          <Component {...matchProps} />  
      </DashboardLayout>  
    )} />  
  )  
};  
  
export default DashboardLayoutRoute;  