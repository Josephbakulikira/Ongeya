import React, { Component } from 'react'
import { Segment, Form, Button,  } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { createPost, updatePost} from '../../PostRedux/PostActions'
import cuid from 'cuid';


const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  let post = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }
  if(postId && state.posts.length > 0){
    post = state.posts.filter(post => post.id === postId)[0]
  }

  return {
    post
  }
}

const actions = {
  createPost,
  updatePost
}

class PostForm extends Component {
  state = {
    ...this.props.post
  };
  componentDidMount()
  {
    if(this.props.selectedPost !== null )
    {
      this.setState({
        ...this.props.selectedPost
      })
    }
  };

  handleSubmitOfForm = (event) => 
  {
    event.preventDefault();
    if(this.state.id)
    {

      this.props.updatePost(this.state);
      this.props.history.push(`/posts/${this.state.id}`)
    }else{
      const newPost = {
        ...this.state, 

        id: cuid(),
        hostPhotoURL: '/images/user.png'
      }
      this.props.createPost(newPost);
      this.props.history.push(`/posts`)
    }
    
    
  }

  

  handleInputChange = ({target: {name, value}}) =>
  {
    this.setState({
      [name]: value
    });
  };

  render() {

      const {title, city, date, venue, hostedBy} = this.state;
        return (
                  <Segment>
                    <Form onSubmit={this.handleSubmitOfForm} autoComplete='off'>
                      <Form.Field>
                        <label>Post Title</label>
                        <input name="title" onChange={this.handleInputChange} value={title}  placeholder="Title" />
                      </Form.Field>
                      <Form.Field>
                        <label> Date</label>
                        <input name="date" onChange={this.handleInputChange} value={date}  type="date" placeholder=" Date" />
                      </Form.Field>
                      <Form.Field>
                        <label>City</label>
                        <input name="city" onChange={this.handleInputChange} value={city} placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input name="venue" onChange={this.handleInputChange} value={venue}  placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input name="hostedBy" onChange={this.handleInputChange} value={hostedBy} placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button positive type="submit">
                        Submit
                      </Button>
                      <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default connect(mapState, actions)(PostForm);
