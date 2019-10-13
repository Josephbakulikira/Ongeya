import React, { Component, Fragment } from 'react';

import PostListItem from './PostListItem';

class PostList extends Component {
    render() {
        const {posts, deletePost} = this.props
        return (
            <Fragment>
                {posts.map(post => (
                    <PostListItem deletePost={deletePost} key={post.id} post={post} />
                ))}
            </Fragment>
        )
    }
}
export default PostList;
