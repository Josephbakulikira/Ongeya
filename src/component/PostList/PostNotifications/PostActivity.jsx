import React, {Fragment} from 'react'
import { Header, Segment } from 'semantic-ui-react'

const PostActivity = () => {
    return (
        <Fragment>
            <Header attached='top' content='Recent Activity' />
            <Segment attached>
                <p>recent notifications</p>
            </Segment>
        </Fragment>
    )
}

export default PostActivity
