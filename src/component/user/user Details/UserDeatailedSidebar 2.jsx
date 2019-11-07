import React from 'react'
import { Fragment } from 'react'
import { Grid,Segment, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

 const UserDeatailedSidebar2 = () => {
    return (
        <Fragment>
            
            <Grid.Column width={1}>
                    <Segment>
                    <Button as={Link} to='/settings'>Edit</Button>    
                    </Segment>
                </Grid.Column>
        </Fragment>
    )
}
export default UserDeatailedSidebar2
