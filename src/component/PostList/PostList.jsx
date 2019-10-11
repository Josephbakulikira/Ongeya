import React, { Component, Fragment } from 'react';

import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        return (
            <Fragment>
                {this.props.posts.map(post => (
                    <PostListItem key={post.id} post={post}/>
                ))}
            </Fragment>
        )
    }
}
export default PostList;
