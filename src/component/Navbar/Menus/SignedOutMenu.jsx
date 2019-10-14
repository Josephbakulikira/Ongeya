import React from 'react'
import { Menu, Button } from 'semantic-ui-react'

const SignedOutMenu = ({signIn, register}) => {
    return (
        <Menu.Item position="right">
            <Button onClick={register} basic inverted content="Register"  />
            <Button basic inverted content="Login" onClick={signIn} style={{marginLeft: '0.5em'}}/>
            
        </Menu.Item>
    )
}

export default SignedOutMenu
