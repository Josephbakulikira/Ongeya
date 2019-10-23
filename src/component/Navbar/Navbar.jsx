import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from './Menus/SignedOutMenu'
import SignedInMenu from './Menus/SignedInMenu'
import { openModal } from '../Modals/ModalActions';

import { withFirebase } from 'react-redux-firebase';


const actions = {
  openModal,
  
}
const mapState =(state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.auth,
  
  
})

 class Navbar extends Component {
    
    
    handleSignedIn = () => 
        this.props.openModal('LoginModal')
    
    handleRegister = () => {
      this.props.openModal('RegisterModal')
    }
        
    handleSignedOut = () => {
        this.props.firebase.logout();
        this.props.history.push('/');
      }

    render() {
      const { auth, profile} = this.props;
      const authenticated = auth.isLoaded && !auth.isEmpty;
        return (
          
                  <Menu inverted fixed="top">
                   <Container>
                      <Menu.Item as={NavLink} exact to='/' header>
                        <img src="../images/logo1.png" alt="logo" />  ONGEYA
                          
                      </Menu.Item>
                      <Menu.Item as={NavLink} exact to='/posts' name="Posts" />
                      {authenticated && <Fragment>
                      <Menu.Item as={NavLink} to='/people' name="People" />
                      <Menu.Item as={NavLink} to='/test' name="essais" />
                      <Menu.Item>
                        <Button  as={Link} to='createposts' inverted  ><Icon fitted name='plus'/></Button>
                      </Menu.Item>
                      </Fragment>}
                      {authenticated ? <SignedInMenu signOut={this.handleSignedOut} profile={profile} auth={auth} /> 
                                     : <SignedOutMenu signIn={this.handleSignedIn} 
                                     
                                     register={this.handleRegister}/>}
                      
                      
                    </Container>
                  </Menu>
        )
    }
}
export default withRouter(withFirebase(connect(mapState, actions)(Navbar)));
