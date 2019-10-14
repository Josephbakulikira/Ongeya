import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from './Menus/SignedOutMenu'
import SignedInMenu from './Menus/SignedInMenu'
import { openModal } from '../Modals/ModalActions';
import { logout } from '../auth/AuthActions';


const actions = {
  openModal,
  logout
}
const mapState =(state) => ({
  auth: state.auth
})
 class Navbar extends Component {
    

    handleSignedIn = () => 
        this.props.openModal('LoginModal')
    
    handleRegister = () => {
      this.props.openModal('RegisterModal')
    }
        
    handleSignedOut = () => {
        this.props.logout()
        this.props.history.push('/');
      }

    render() {
      const { auth } = this.props;
      const authenticated = auth.authenticated;
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item as={NavLink} exact to='/' header>
                        <img src="../images/logo1.png" alt="logo" />  ONGEYA
                          
                      </Menu.Item>
                      <Menu.Item as={NavLink} exact to='/posts' name="Posts" />
                      <Menu.Item as={NavLink} to='/people' name="People" />
                      <Menu.Item as={NavLink} to='/test' name="essais" />
                      <Menu.Item>
                        <Button  as={Link} to='createposts' inverted  ><Icon fitted name='plus'/></Button>
                      </Menu.Item>
                      {authenticated ? <SignedInMenu signOut={this.handleSignedOut} currentUser={auth.currentUser} /> 
                                     : <SignedOutMenu signIn={this.handleSignedIn} 
                                     
                                     register={this.handleRegister}/>}
                      
                      
                    </Container>
                  </Menu>
        )
    }
}
export default withRouter(connect(mapState, actions)(Navbar));
