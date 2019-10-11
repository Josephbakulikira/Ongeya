import React, { Component } from 'react'
import { Menu, Container, Button, Icon } from 'semantic-ui-react'

 class Navbar extends Component {
    render() {
        return (
                  <Menu inverted fixed="top">
                    <Container>
                      <Menu.Item header>
                        <img src="../images/logo1.png" alt="logo" />  ONGEYA
                          
                      </Menu.Item>
                      <Menu.Item name="Posts" style={{marginLeft: '20.5em'}}/>
                      <Menu.Item>
                        <Button   inverted  ><Icon fitted name='plus'/></Button>
                      </Menu.Item>
                      <Menu.Item position="right">
                        <Button basic inverted content="Login" />
                        <Button basic inverted content="Sign Out" style={{marginLeft: '0.5em'}} />
                      </Menu.Item>
                    </Container>
                  </Menu>
        )
    }
}
export default Navbar;
