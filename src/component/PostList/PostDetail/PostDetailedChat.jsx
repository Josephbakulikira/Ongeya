import React, { Fragment } from 'react'
import { Segment, Comment, Header, Form, Button } from 'semantic-ui-react'

const PostDetailedChat = () => {
    return (
            <Fragment>
              <Segment
                textAlign="center"
                attached="top"
                inverted
                color="teal"
                style={{ border: 'none' }}
              >
                <Header>Chat about this Topic</Header>
              </Segment>
        
              <Segment attached>
                <Comment.Group>
                  <Comment>
                    <Comment.Avatar src="/images/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">mobutu</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:42PM</div>
                      </Comment.Metadata>
                      <Comment.Text>nyama gani ule!</Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
        
                  <Comment>
                    <Comment.Avatar src="/images/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">kabila</Comment.Author>
                      <Comment.Metadata>
                        <div>Yesterday at 12:30AM</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        <p>
                          si fayulu , na fujo mingi
                        </p>
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                    <Comment.Group>
                      <Comment>
                        <Comment.Avatar src="/images/user.png" />
                        <Comment.Content>
                          <Comment.Author as="a">Felix tshisekedi</Comment.Author>
                          <Comment.Metadata>
                            <div>Just now</div>
                          </Comment.Metadata>
                          <Comment.Text>fayulu ni Zoba saana :)</Comment.Text>
                          <Comment.Actions>
                            <Comment.Action>Reply</Comment.Action>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                    </Comment.Group>
                  </Comment>
        
                  <Comment>
                    <Comment.Avatar src="/images/user.png" />
                    <Comment.Content>
                      <Comment.Author as="a">fayulu</Comment.Author>
                      <Comment.Metadata>
                        <div>5 days ago</div>
                      </Comment.Metadata>
                      <Comment.Text>! bi ishiye pale bisikuwe byaku kwazana! </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
        
                  <Form reply>
                    <Form.TextArea />
                    <Button
                      content="Add Reply"
                      labelPosition="left"
                      icon="edit"
                      primary
                    />
                  </Form>
                </Comment.Group>
              </Segment>
            </Fragment>
    )
}

export default PostDetailedChat
