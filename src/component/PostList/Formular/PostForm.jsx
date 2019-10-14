/*global google*/

import React, { Component } from 'react'
import { Segment, Form, Button, Grid, Header,   } from 'semantic-ui-react'
import {reduxForm, Field} from 'redux-form'
import { connect } from 'react-redux';
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate';
import { createPost, updatePost} from '../../PostRedux/PostActions'
import cuid from 'cuid';
import TextInput from '../../../MainApp/Form/TextInput';
import TextArea from '../../../MainApp/Form/TextArea';
import SelectInput from '../../../MainApp/Form/SelectInput';
import DateInput from '../../../MainApp/Form/DateInput';
import PlaceInput from '../../../MainApp/Form/PlaceInput';
import {geocodeByAddress, getLatLng} from 'react-places-autocomplete'


const mapState = (state, ownProps) => {
  const postId = ownProps.match.params.id;

  let post = {};
  if(postId && state.posts.length > 0){
    post = state.posts.filter(post => post.id === postId)[0]
  }

  return {
    initialValues: post
  }
}

const actions = {
  createPost,
  updatePost
}

const validate = combineValidators({
  title: isRequired({message: 'please enter the post title'}),
  category: isRequired({message: 'the category is required'}),
  description: composeValidators(
    isRequired({message: 'please enter the description'}),
    hasLengthGreaterThan(6)({message: 'the description need to be at least 7 letter or character'})
  )(),
  // city: isRequired('city'),
  // venue: isRequired('address'),
  date : isRequired('date')
})

const category = [
    
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'news', text: 'News', value: 'news'},
    {key: 'event', text: 'Event', value: 'event'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'comedy', text: 'Comedy', value: 'comedy'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
    {key: 'party', text: 'Party', value: 'party'},
    {key: 'anime', text: 'Anime', value: 'anime'},
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
];

class PostForm extends Component {
  state = {
    cityLatLng: {},
    venueLatLng: {}
  }

  handleSubmitOfForm = values => 
  {
    values.venueLatLng = this.state.venueLatLng;
   
    if(this.props.initialValues.id)
    {
      this.props.updatePost(values);
      this.props.history.push(`/posts/${this.props.initialValues.id}`)
    }else{
      const newPost = {
        ...values, 

        id: cuid(),
        hostPhotoURL: '/images/user.png',
        hostedBy: 'Ghost'
      }
      this.props.createPost(newPost);
      this.props.history.push(`/posts/${newPost.id}`)
    }
  }

  

  handleInputChange = ({target: {name, value}}) =>
  {
    this.setState({
      [name]: value
    });
  };
  
  handleCitySelect = selectedCity => {
    geocodeByAddress(selectedCity)
    .then(results => getLatLng(results[0]))
    .then(latlng => {this.setState({
      cityLatLng: latlng
    })})
    .then(() => {
      this.props.change('city', selectedCity)
    })
  }
  
  handleVenueSelect = selectedVenue => {
    geocodeByAddress(selectedVenue)
    .then(results => getLatLng(results[0]))
    .then(latlng => {this.setState({
      venueLatLng: latlng
    })})
    .then(() => {
      this.props.change('venue', selectedVenue)
    })
  }

  render() {
        const {history, initialValues, invalid, submitting, pristine} = this.props
      
        return (
              <Grid>
                <Grid.Column width = {10}>
                <Segment>
                <Header sub color='teal' content='Post Detail' /> 
                    <Form onSubmit={this.props.handleSubmit(this.handleSubmitOfForm)} autoComplete='off'>
                      <Field name='title' component={TextInput} placeholder='name your post '/>
                      <Field name='description' component={TextArea} rows={4} placeholder='tell us about your post'/>
                      <Field name='category' component={SelectInput} options={category}  placeholder='what is it about'/>

                      <Header sub color='teal' content='Post Location Details'/>
                      <Field 
                      name='city' 
                      component={PlaceInput} 
                      options={{types: ['(cities)'] }} 
                      onSelect={this.handleCitySelect} 
                      placeholder='post city'/>

                      <Field 
                      name='venue' 
                      component={PlaceInput}
                      options={{
                        location: new google.maps.LatLng(this.state.cityLatLng),
                        radius: 1000,
                        types: ['establishment']
                      }}
                      onSelect={this.handleVenueSelect}
                      placeholder='post address'/>
                      
                      
                      <Field name='date' 
                      component={DateInput} 
                      dateFormat='dd LLL yyyy h:mm a' 
                      showTimeSelect
                      timeFormat='HH:mm'
                      placeholder='post date'/>
                      <Button positive type="submit" disabled={invalid || submitting || pristine}>
                        Submit
                      </Button>
                      <Button onClick={initialValues.id? () => history.push(`/posts/${initialValues.id}`) :() => history.push('/posts')}
                               type="button">Cancel</Button>
                    </Form>
                  </Segment>
                </Grid.Column>

                <Grid.Column width={6}>
                  <h1>ads, pub</h1>
                </Grid.Column>

              </Grid>
                  
        )
    }
}
export default connect(mapState, actions)(reduxForm({form: 'postForm', validate})(PostForm));
