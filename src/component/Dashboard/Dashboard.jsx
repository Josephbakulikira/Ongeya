import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import PostList from '../PostList/PostList'
import { connect } from 'react-redux'
import {createPost, deletePost, updatePost} from '../PostRedux/PostActions'
import LoadingComponent from '../../MainApp/LoadingComponent'
import PostActivity from '../PostList/PostNotifications/PostActivity'
import { firestoreConnect } from 'react-redux-firebase'
 
 const mapState = (state) => ({
   posts: state.firestore.ordered.posts,
   loading: state.async.loading
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
        
        const {posts, loading} = this.props;
        if(loading) return<LoadingComponent inverted={false} />
        return (
            <Grid>
                <Grid.Column width ={6}>
                  <PostActivity />    
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
export default connect(mapState, actions)(firestoreConnect([{collection: 'posts'}]) (Dashboard));
