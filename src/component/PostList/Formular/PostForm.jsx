import React, { Component } from 'react'
import { Segment, Form, Button,  } from 'semantic-ui-react'

class PostForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
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
    }else{
      this.props.createPost(this.state);
    }
    
    
  }

  

  handleInputChange = ({target: {name, value}}) =>
  {
    this.setState({
      [name]: value
    });
  };

  render() {
      const {cancelForm} = this.props;
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
                      <Button onClick={cancelForm} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}
export default PostForm;
