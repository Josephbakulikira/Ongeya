import React from 'react'
import { Fragment } from 'react'
import { Grid, Segment, Header, Image } from 'semantic-ui-react'

 const UserDetailedPhotos = ({photos}) => {
    return (
        <Fragment>
            <Grid.Column width={12}>
                    <Segment attached>
                        <Header icon='image' content='Photos'/>
                        
                        <Image.Group size='small'>
                        {photos && photos.map(photo => <Image key={photo.id} src={photo.url}/>)}
                        </Image.Group>
                    </Segment>
                </Grid.Column>
        </Fragment>
    )
}
export default UserDetailedPhotos
