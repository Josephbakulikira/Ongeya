import React, { Component } from 'react'
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react'
import PostListAttendee from './PostListAttendee'

 class PostListItem extends Component {
    render() {
        const {post} = this.props;
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular src={post.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header as="a">{post.title}</Item.Header>
                            <Item.Description>
                              Hosted by <a>{post.hostedBy}</a>
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {post.date}
                        <Icon name="marker" /> {post.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        {post.attendees.map(attendee => (
                          <PostListAttendee key={attendee.id} attendee={attendee}/>
                        ))}
                        
                      </List>
                    </Segment>
                    <Segment clearing>
                      <span>{post.description}</span>
                      <Button as="a" color="teal" floated="right" content="View" />
                    </Segment>
                  </Segment.Group>
        )
    }
}
export default PostListItem;
