import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostList from '../PostList/PostList'
import { connect } from 'react-redux'
import {createPost, deletePost, updatePost} from '../PostRedux/PostActions'
 
 const mapState = (state) => ({
   posts: state.posts
 })
 
 const actions ={
    createPost,
    deletePost,
    updatePost   
 }

 class Dashboard extends Component {
  
     handleDeletePost = (id) => 
      {
        this.props.deletePost(id);
      }

    render() {
        
        const {posts} = this.props;
        return (
            <Grid>
                <Grid.Column width ={6}>
                  <h1>Notification feed</h1>    
                </Grid.Column>
                <Grid.Column width={10}>
                    <PostList 
                    posts = {posts} 
                    deletePost={this.handleDeletePost}
                     />
                </Grid.Column>
            </Grid>
        )
    }
}
export default connect(mapState, actions)(Dashboard);
