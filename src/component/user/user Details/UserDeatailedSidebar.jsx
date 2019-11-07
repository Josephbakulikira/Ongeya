import React from 'react'
import { Fragment } from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

 const UserDeatailedSidebar = () => {
    return (
        <Fragment>
            
            <Grid.Column width={2}>
                    <Segment>
                    <Button as={Link} to='/settings' color='crimson' fluid basic content='Edit'/>   
                    </Segment>
                </Grid.Column>
        </Fragment>
    )
}
export default UserDeatailedSidebar
