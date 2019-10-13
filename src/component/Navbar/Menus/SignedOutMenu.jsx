import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn}) => {
    return (
        <Menu.Item position="right">
            <Button basic inverted content="Register"  />
            <Button basic inverted content="Login" onClick={signIn} style={{marginLeft: '0.5em'}}/>
            
        </Menu.Item>
    )
}

export default SignedOutMenu
