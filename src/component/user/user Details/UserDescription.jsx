import React, { Fragment } from 'react'
import { Grid, Segment, Header, List, Item, Icon, } from 'semantic-ui-react'
import  {format}  from 'date-fns';

const UserDescription = ({profile, auth}) => {
    let createdAt;
    if(profile.createdAt){
        createdAt = format(profile.createdAt.toDate(), 'D MM YYYY')
    }
    return (
        <Fragment>
            <Grid.Column width={12}>
                    <Segment>
                        <Grid columns={2}>
                            <Grid.Column width={10}>
                                {console.log(profile)}
                                {console.log(auth)}
                                <Header icon='smile'>About {auth.displayName}</Header>
                                <p>I am a: <strong> {auth.occupation || 'unknown occupation'}</strong></p>
                                <p>Originally from <strong>{auth.origin || '...'}</strong></p>
                                <p>Member Since: <strong>{createdAt}</strong></p>
                                <p>{profile.description}</p>

                            </Grid.Column>
                            <Grid.Column width={6}>

                                <Header icon='heart outline' content='Interests'/>
                                {auth.interests ?
                                <List>
                                {auth.interests && auth.interests.map((interest, index) => (
                                    <Item key={index}>
                                        <Icon name='heart'/>
                                        <Item.Content>{interest}</Item.Content>
                                    </Item>
                                    ))}
                                </List>: <p>No Interests</p>}
                            </Grid.Column>
                        </Grid>

                    </Segment>
                </Grid.Column>
        </Fragment>
    )
}
export default UserDescription
