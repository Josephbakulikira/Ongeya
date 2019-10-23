import React from 'react';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../MainApp/Form/TextInput';
import { connect } from 'react-redux';
import { registerUser } from '../AuthActions';
// import SocialLogin from '../socialLogin/SocialLogin';


const actions = {
 registerUser 
}
const RegisterForm = ({handleSubmit, registerUser}) => {
  return (
    <div>
      <Form size="large" autoComplete='off' onSubmit={handleSubmit(registerUser)}>
        <Segment>
          <Field
            name="displayName"
            type="text"

            component={TextInput}
            placeholder="Display name"
          />
          <Field
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
          />
          <Field
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
          />
          <Button fluid size="large" color="teal">
            Register
          </Button>
          <Divider Horizontal>
          or
        </Divider>
          {/* <SocialLogin/> */}
        </Segment>
      </Form>
    </div>
  );
};

export default connect(null, actions)(reduxForm({form: 'registerForm'})(RegisterForm));