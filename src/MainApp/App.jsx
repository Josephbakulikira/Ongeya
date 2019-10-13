import React, { Component, Fragment } from "react";
import {  Container } from "semantic-ui-react"
import Dashboard from "../component/Dashboard/Dashboard";
import Navbar from "../component/Navbar/Navbar";
import { Route } from "react-router-dom";
import HomePage from "../component/Home/HomePage";
import PostDetailPage from "../component/PostList/PostDetail/PostDetailPage";
import peopleDashboard from "../component/user/People Dashboard/peopleDashboard";
import SettingDashboard from "../component/user/settings/SettingDashboard";
import UserDetailedPage from "../component/user/user Details/UserDetailedPage";
import PostForm from "../component/PostList/Formular/PostForm";


class App extends Component {
  render(){
    return (
        <Fragment>
          <Route exact path='/' component={HomePage} />
          <Route path='/(.+)' render={() => (
            <Fragment>
            <Navbar />
            <Container className="main">
              
              <Route path='/posts' component={Dashboard} />
              <Route path='/posts/:id' component={PostDetailPage} />
              <Route path='/people' component={peopleDashboard} />
              <Route path='/profile/:id' component={UserDetailedPage} />
              <Route path='/settings' component={SettingDashboard} />
              <Route path='/createposts' component={PostForm} />
              
            </Container>
            </Fragment>
          )} />
          
    
        </Fragment>
      );
  }
}

export default App;
