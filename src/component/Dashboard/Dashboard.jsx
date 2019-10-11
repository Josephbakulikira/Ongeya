import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import PostList from '../PostList/PostList'
import PostForm from '../PostList/Formular/PostForm'

const Posts = [
  {
    id: '1',
    title: 'ba shindikana basha kuwa ba mingi',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Kinshasa, CD',
    venue: "Boulevard Kinshasa",
    hostedBy: 'Amrani',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/42.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Amrani',
        photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
      },
      {
        id: 'b',
        name: 'gd6',
        photoURL: 'https://randomuser.me/api/portraits/men/18.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'ma combat zisha punguka',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'Kinshasa, CD',
    venue: 'Ma Campagne',
    hostedBy: 'gd6',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/18.jpg',
    attendees: [
      {
        id: 'b',
        name: 'audrey',
        photoURL: 'https://randomuser.me/api/portraits/men/26.jpg'
      },
      {
        id: 'a',
        name: 'amrani',
        photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
      }
    ]
  }
]
 class Dashboard extends Component {
     state = {
         posts: Posts,
         isOpen: false 
     }
     handleIsOpenToggle = () =>
     {
        this.setState(({isOpen}) => ({
            isOpen: !isOpen
        }))         
     }
    render() {
        const {posts, isOpen} = this.state;
        return (
            <Grid>
                <Grid.Column width ={6}>
                    <Button onClick={this.handleIsOpenToggle} positive content="Add Post"/>
                    {isOpen && <PostForm cancelForm ={this.handleIsOpenToggle}/>}
                    </Grid.Column>
                <Grid.Column width={10}>
                    <PostList posts = {Posts}/>
                </Grid.Column>
            </Grid>
        )
    }
}
export default Dashboard;
