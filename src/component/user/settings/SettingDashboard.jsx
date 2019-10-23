import React from 'react';
import { Grid } from 'semantic-ui-react';
import SettingNav from './SettingNav';
import { Route, Redirect, Switch } from 'react-router-dom';
import BasicPage from './BasicPage';
import AboutPage from './AboutPage';
import PhotosPage from './PhotosPage';
import AccountPage from './AccountPage';
import { connect } from 'react-redux';
import { updatePassword } from '../../auth/AuthActions';
import {updateProfile} from '../../user/UserActions'


const actions = {
    updatePassword,
    updateProfile
}
const mapState = (state) => ({
    providerId: state.firebase.auth.isLoaded && state.firebase.auth.providerData[0].providerId,
    user: state.firebase.auth
})

const SettingDashboard = ({updatePassword, providerId, user, updateProfile}) => {
    return (
        <Grid>
            
            <Grid.Column width={4}>
                <SettingNav/>
            </Grid.Column>
            <Grid.Column width={12}>
            <Switch>
            <Redirect exact from='/settings' to='/settings/basic'/>
                <Route path='/settings/basic' render={() => <BasicPage updateProfile={updateProfile} initialValues={user}/>} />
                <Route path='/settings/about' render= {() => <AboutPage updateProfile={updateProfile} initialValues={user}/>} />
                <Route path='/settings/gallery' component={PhotosPage} />
                <Route path='/settings/account'  render={() => <AccountPage updatePassword={updatePassword} providerId={providerId}/>} />
            </Switch>
            </Grid.Column>
        </Grid>
    );
}

export default connect(mapState, actions)(SettingDashboard)
