import React, { Component } from 'react'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'
import { NavLink, Link, withRouter } from 'react-router-dom'
import SignedOutMenu from './Menus/SignedOutMenu'
import SignedInMenu from './Menus/SignedInMenu'

 class Navbar extends Component {
    state = {
      authenticated: false
    }

    handleSignedIn = () => 
        this.setState({authenticated: true});
    handleSignedOut = () => {
        this.setState({authenticated: false});
        this.props.history.push('/');
      }

    render() {
      const {authenticated} = this.state;
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
                      {authenticated ? <SignedInMenu signOut={this.handleSignedOut}/> : <SignedOutMenu signIn={this.handleSignedIn}/>}
                      
                      
                    </Container>
                  </Menu>
        )
    }
}
export default withRouter (Navbar);
