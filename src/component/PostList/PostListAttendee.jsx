import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';


class PostListAttendee extends Component {
    render() {
        const{attendee} = this.props;
        return (
            <List.Item>
                <Image circular src ={attendee.photoURL} as="a" size="mini" />
            </List.Item>
        )
    }
}
export default PostListAttendee;