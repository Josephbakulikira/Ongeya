import React from 'react'
import { Grid } from 'semantic-ui-react'
import PostDetailHeader from './PostDetailHeader'
import PostDetailedInfo from './PostDetailedInfo'
import PostDetailedChat from './PostDetailedChat'
import PostDetailedSidebar from './PostDetailedSidebar'
import { connect } from 'react-redux'

const mapState = (state, ownProps) => {
    const postId = ownProps.match.params.id;

    let post = {};
    
    if(postId && state.posts.length> 0){
        post = state.posts.filter(post => post.id === postId)[0];
    }
    return {
        post
    }
}



const PostDetailPage = ({post}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <PostDetailHeader post = {post}/>
                <PostDetailedInfo post={post}/>
                <PostDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <PostDetailedSidebar attendees={post.attendees}/>
            </Grid.Column>
            
        </Grid>   
    )
}

export default connect(mapState)(PostDetailPage)

