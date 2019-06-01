import React, { Component } from 'react';  
import { Route } from 'react-router-dom'; 
import { Container } from 'reactstrap';
import NavMenu from './NavMenu'; 
  
const LoginLayout = ({ children }) => (                         
    <div>  
      <NavMenu />
      <Container>
        {children}
      </Container>                                     
    </div>  
  );  
  
  const LoginLayoutRoute = ({component: Component, ...rest}) => {  
    return (  
      <Route {...rest} render={matchProps => (  
        <LoginLayout>  
            <Component {...matchProps} />  
        </LoginLayout>  
      )} />  
    )  
  };  
  
export default LoginLayoutRoute;  