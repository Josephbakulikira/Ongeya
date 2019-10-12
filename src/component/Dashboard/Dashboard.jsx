import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import PostList from '../PostList/PostList'
import PostForm from '../PostList/Formular/PostForm'
import cuid from 'cuid'

const Posts = [
  {
    id: '1',
    title: 'ba shindikana basha kuwa ba mingi',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
         Posts: Posts,
         isOpen: false,
         selectedPost: null 
     }
    // handleIsOpenToggle = () =>
    //  {
    //     this.setState(({isOpen}) => ({
    //         isOpen: !isOpen
    //     }))         
    //  }

    handleCreateFormOpen = () => {
      this.setState({
        isOpen: true,
        selectedPost: null
      })
    }
    handleFormCancel = () => {
      this.setState( {
        isOpen: false
      })
    }

    handleCreatePost = (newPost) => {
      newPost.id = cuid();
      newPost.hostPhotoURL = '/images/user.png'
      this.setState( ({Posts}) => ({
        Posts: [...Posts, newPost],
        isOpen: false
      }))
     }

     handleSelectPost = ( pst) => {
      
       this.setState({
        selectedPost: pst,
        isOpen: true
       })
     } 
     
     handleDeletePost = (id) => 
      {
        this.setState(({Posts}) => ({
          Posts: Posts.filter(p => p.id !== id  )
        }))
      }

     handleUpdatePost = (updatedPost) => {
       this.setState(({Posts}) =>  ({
          Posts: Posts.map(post => {
            if(post.id === updatedPost.id){
              return {...updatedPost}
            }else{
              return post
            }
          }),
          isOpen: false,
          selectedPost: null
       }))

       
     }

    render() {
        const {Posts, isOpen, selectedPost} = this.state;
        return (
            <Grid>
                <Grid.Column width ={6}>
                    <Button onClick={this.handleCreateFormOpen} positive content="Add Post"/>
                    {isOpen && <PostForm
                     key={selectedPost ? selectedPost.id : 0} 
                     updatePost = {this.handleUpdatePost}
                     createPost={this.handleCreatePost} 
                     cancelForm ={this.handleFormCancel} 
                     selectedPost={selectedPost}/>}
                    </Grid.Column>
                <Grid.Column width={10}>
                    <PostList 
                    posts = {Posts} 
                    deletePost={this.handleDeletePost}
                    selectPost={this.handleSelectPost} />
                </Grid.Column>
            </Grid>
        )
    }
}
export default Dashboard;
