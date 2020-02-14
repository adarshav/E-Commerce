import React from 'react';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';

//class component because what the user entriesis not known [changes]
class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

     handleSubmit = event => {
        event.preventDefault();

        this.setState = ({ "email": '', "password": '' })
    }

    handleChange = event => {
        // console.log(event);
        const {name, value} = event.target;
        
        this.setState = ( {[name]:value })
    }
    render() {
        return(
            <div className = 'sign-in'>
                <h2>I already have an Account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput name = 'email' 
                    type = 'email' 
                    value = {this.state.email} 
                    handleChange = {this.handleChange}
                    label = 'Email'
                    required/>

                    {/* <label>Email</label> */}

                    <FormInput
                    name = 'password'
                    type = 'password'
                    value = {this.state.password}
                    handleChange = {this.handleChange}
                    label = 'Password' 
                    required/>

                    {/* <label>Password</label> */}

                    <input type = 'submit' value = 'Submit form' />
                </form>
            </div>

            
        )
    }
}

export default SignIn;