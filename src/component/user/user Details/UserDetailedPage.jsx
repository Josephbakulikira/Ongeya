import React, {Component} from 'react';
import {Button, Card, Grid, Header, Icon, Image, Item, List, Menu, Segment} from "semantic-ui-react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import UserDetailedHeader from './UserDetailedHeader';
import UserDescription from './UserDescription';
import UserDeatailedSidebar from './UserDeatailedSidebar';
import UserDetailedPhotos from './UserDetailedPhotos';
import UserDetailedPosts from './UserDetailedPosts';
import UserDeatailedSidebar2 from './UserDeatailedSidebar 2';
import UserDeatailedSidebar3 from './UserDeatailedSidebar 3';


const query = ({auth}) => {
    return [
        {
            collection: 'users',
            doc: auth.uid,
            subcollections: [{collection: 'photos'}],
            storeAs: 'photos'

        }
    ]
}
const mapState = (state) => ({
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    photos: state.firestore.ordered.photos
})

class UserDetailedPage extends Component {

    render() {
        const {profile, photos, auth} = this.props;
        return (
            <Grid>
                {console.log(auth)}
                <UserDetailedHeader profile={auth}/>
                
                <UserDescription profile={profile} auth={auth}/>
                <UserDeatailedSidebar/>
                {photos && photos.length > 0 && 
                    <UserDetailedPhotos photos={photos}/>}
                <UserDetailedPosts/>
                
            </Grid>

        );
    }
}

export default compose(connect(mapState), firestoreConnect(auth => query(auth)))(UserDetailedPage);    