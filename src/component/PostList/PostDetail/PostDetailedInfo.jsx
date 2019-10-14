import React, {useState} from 'react'
import { Segment, Icon, Grid, Button } from 'semantic-ui-react'
import PostDetailedMap from './PostDetailedMap'

const PostDetailedInfo = ({post}) => {
    const[isMapOpen, showMapToggle] = useState(false) 
    return (
           <Segment.Group>
              <Segment attached="top">
                <Grid>
                  <Grid.Column width={1}>
                    <Icon size="large" color="teal" name="info" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <p>{post.description} </p>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="calendar" size="large" color="teal" />
                  </Grid.Column>
                  <Grid.Column width={15}>
                    <span>{post.date}</span>
                  </Grid.Column>
                </Grid>
              </Segment>
              <Segment attached>
                <Grid verticalAlign="middle">
                  <Grid.Column width={1}>
                    <Icon name="marker" size="large" color="teal" />
                  </Grid.Column>
                
                  <Grid.Column width={11}>
                    <span>{post.venue}</span>
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Button onClick={() => showMapToggle(!isMapOpen)} color="teal" size="tiny" content={isMapOpen? 'Hide map' : 'Show map'} />
                  </Grid.Column>
                </Grid>
              </Segment>
              {isMapOpen && 
              <PostDetailedMap lat={post.venueLatLng.lat} lng={post.venueLatLng.lng} />}
            </Segment.Group>
    )
}

export default PostDetailedInfo
