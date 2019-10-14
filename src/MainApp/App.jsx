import React, { Component, Fragment } from "react";
import {  Container } from "semantic-ui-react"
import Dashboard from "../component/Dashboard/Dashboard";
import Navbar from "../component/Navbar/Navbar";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../component/Home/HomePage";
import PostDetailPage from "../component/PostList/PostDetail/PostDetailPage";
import peopleDashboard from "../component/user/People Dashboard/peopleDashboard";
import SettingDashboard from "../component/user/settings/SettingDashboard";
import UserDetailedPage from "../component/user/user Details/UserDetailedPage";
import PostForm from "../component/PostList/Formular/PostForm";
import testComponent from "../component/test Area/testComponent";
import ModalManager from "../component/Modals/ModalManager";


class App extends Component {
  render(){
    return (
        <Fragment>
         <ModalManager />
          <Route exact path='/' component={HomePage} />
          <Route path='/(.+)' render={() => (
            <Fragment>
            <Navbar />
            <Container className="main">
              <Switch key={this.props.location.key}>
                <Route exact path='/posts' component={Dashboard} />
                <Route path='/posts/:id' component={PostDetailPage} />
                <Route path='/people' component={peopleDashboard} />
                <Route path='/profile/:id' component={UserDetailedPage} />
                <Route path='/settings' component={SettingDashboard} />
                <Route path={['/createposts', '/manage/:id']} component={PostForm} />
                <Route path='/test' component={testComponent} />
              </Switch>
              
            </Container>
            </Fragment>
          )} />
          
    
        </Fragment>
      );
  }
}

export default withRouter(App);
