import React from 'react';

import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';


//class component because what the user entries is not known [changes]
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

        this.setState({ "email": '', "password": '' })
    }

    handleChange = event => {
        // console.log(event);
        const {name, value} = event.target;
        
        this.setState( {[name]:value })
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
                    label = 'E-mail'
                    required/>

                    {/* <label>Email</label> */}

                    <FormInput
                    name = 'password'
                    type = 'password' 
                    value = {this.state.password}
                    handleChange = {this.handleChange}
                    label = 'Password' 
                    required />

                    {/* <label>Password</label> */}
                    <div className = 'buttons'>
                        <CustomButton type = 'submit' >
                            Sign in
                            {/* Here SignIn is children of customButton */}
                        </CustomButton>

                        <CustomButton onClick = {signInWithGoogle} isGoogleSignIn>
                            Sign in With Google
                        </CustomButton>
                    </div>
                    
                    
                </form>
            </div>

            
        )
    }
}

export default SignIn;