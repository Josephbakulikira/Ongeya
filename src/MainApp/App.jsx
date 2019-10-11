import React, { Component, Fragment } from "react";
import {  Container } from "semantic-ui-react"
import Dashboard from "../component/Dashboard/Dashboard";
import Navbar from "../component/Navbar/Navbar";


class App extends Component {
  render(){
    return (
        <Fragment>
          <Navbar/>
          <Container className="main">
            <Dashboard />
            
          </Container>
    
        </Fragment>
      );
  }
}

export default App;
