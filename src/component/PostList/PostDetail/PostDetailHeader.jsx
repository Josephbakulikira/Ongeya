import React from 'react'
import { Segment, Image, Button, Header, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import {format, parseISO} from 'date-fns'

const postImageStyle = {
    filter: 'brightness(30%)'
};

const postImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

const PostDetailHeader = ({post}) => {
    return (
           <Segment.Group>
              <Segment basic attached="top" style={{ padding: '0' }}>
                <Image src={`/images/categoryImages/${post.category}.jpg`} fluid style={postImageStyle} />
        
                <Segment basic style={postImageTextStyle}>
                  <Item.Group>
                    <Item>
                      <Item.Content>
                        <Header
                          size="huge"
                          content={post.title}
                          style={{ color: 'white' }}
                        />
                        <p>{post.date && format(parseISO(post.date),  'EEEE do LLLL')}</p>
                        <p>
                          Hosted by <strong>{post.hostedBy}</strong>
                        </p>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
              </Segment>
        
              <Segment attached="bottom">
                <Button>Cancel My Place</Button>
                <Button color="teal">JOIN THIS TOPIC</Button>
        
                <Button as={Link} to={`/manage/${post.id}`} color="orange" floated="right">
                  Manage Post
                </Button>
              </Segment>
            </Segment.Group>
    )
}

export default PostDetailHeader
