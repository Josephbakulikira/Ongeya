import React, {Fragment} from 'react'
import { Grid, Header, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'


const SettingNav = () => {
    return (
            <Fragment>
              <Menu vertical>
                <Header icon="user" attached inverted color="grey" content="Profile" />
                <Menu.Item as={NavLink} to='/settings/basic'>Basics</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/about'>About Me</Menu.Item>
                <Menu.Item as={NavLink} to='/settings/gallery'>My Photos</Menu.Item>
              </Menu>
              <Grid.Row />
              <Menu vertical>
                <Header
                  icon="settings"
                  attached
                  inverted
                  color="grey"
                  content="Account"
                />
                <Menu.Item as={NavLink} to='/settings/account'>My Account</Menu.Item>
              </Menu>
            </Fragment>
    )
}

export default SettingNav
