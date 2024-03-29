import React, { Component } from 'react'
import { Segment, Item, Icon, Button, List } from 'semantic-ui-react'
import PostListAttendee from './PostListAttendee'
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


 class PostListItem extends Component {
    render() {
        const {post, deletePost} = this.props;
        
        return (
                 <Segment.Group>
                    <Segment>
                      <Item.Group>
                        <Item>
                          <Item.Image size="tiny" circular src={post.hostPhotoURL} />
                          <Item.Content>
                            <Item.Header >{post.title}</Item.Header>
                            <Item.Description>
                              Hosted by {post.hostedBy}
                            </Item.Description>
                          </Item.Content>
                        </Item>
                      </Item.Group>
                    </Segment>
                    <Segment>
                      <span>
                        <Icon name="clock" /> {format(post.date.toDate(), 'EEEE do LLL')} at{' '} {format(post.date.toDate(), 'h:mm a')}
                        <Icon name="marker" /> {post.venue}
                      </span>
                    </Segment>
                    <Segment secondary>
                      <List horizontal>
                        {post.attendees && Object.values( post.attendees).map((attendee, index) => (
                          <PostListAttendee key={index} attendee={attendee}/>
                        ))}
                        
                      </List>
                    </Segment>
                    <Segment clearing>
                      <span>{post.description}</span>
                      <Button  as={Link} to={`/posts/${post.id}`} color="teal" floated="left" content="View" />
                      <Button onClick={() => deletePost(post.id)} as="a" color="red" floated="right" content="Delete" />
                    </Segment>
                  </Segment.Group>
        )
    }
}
export default PostListItem;
