import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { auth } from 'firebase'

const SignedInMenu = ({signOut, profile}) => {
    return (
            <Menu.Item position="right">
              <Image avatar spaced="right" src={profile.photoURL || '/images/user.png'} />
              <Dropdown pointing="top left" text={profile.displayName || auth.displayName}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Create Posts" icon="plus" />
                  <Dropdown.Item text="My Profile" icon="user" />
                  <Dropdown.Item text="My Posts" icon="calendar" />
                  <Dropdown.Item text="My Network" icon="users" />
                  <Dropdown.Item as={Link} to='/settings' text="Settings" icon="settings" />
                  <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
    )
}

export default SignedInMenu
