import React from 'react';
import { Form, Segment, Button, Label, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../MainApp/Form/TextInput';
import {login, socialLogin} from '../AuthActions'
import { connect } from 'react-redux';
import SocialLogin from '../socialLogin/SocialLogin';

const actions = {
    login,
    socialLogin
}

const LoginForm = ({login, handleSubmit, error, socialLogin}) => {
  return (
    <Form size="large" onSubmit={handleSubmit(login)} autoComplete='off'>
      <Segment >
        <Field
          name="email"
          component={TextInput}
          type="text"
          placeholder="Email Address"
        />
        <Field
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        {error && <Label basic color='red' >{error}</Label>}
        <Button fluid size="large" color="teal">
          Login
        </Button>
        <Divider horizontal>
          OR
        </Divider>
        <SocialLogin socialLogin={socialLogin} />
      </Segment>
    </Form>
  );
};

export default connect(null, actions)(reduxForm({form: 'loginForm'})(LoginForm));