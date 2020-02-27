import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../src/assets/crown.svg'
import './header.styles.scss';

const Header = ({currentUser}) => (
    <div className = 'header'>
        <Link className = 'logoContainer' to = '/' >
            <Logo className = 'logo' />
        </Link>
        <div className = 'options'>
            <Link className = 'option' to = '/shop'>SHOP</Link>
            <Link className = 'option' to = '/shop'>CONTACT</Link>
            {
                // TERNARY OPERATOR
                currentUser ? (
                    <div className = 'option' onClick = {() => auth.signOut()}>{currentUser.displayName}</div> 
                )
                :
                (<Link className = 'option' to = '/signin'>SIGN IN</Link> )
            }
        </div>
        
    </div>
)
//it is a function where it takes rootReducer as a state (argument for a function) then assign it to the currentUser
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);

// now we have set up the configuration of redux, userReduceer and userAction has been created and that's mainly used in header component where we use currentUser passed as prop from App.js and that should be configured now for that we are using connect a higher order component from react-redux
// What does connect Do? 
// connect is a higher order component where it allows the component to have the access to the things related to redux, connect takes two arguments one is component other is a mapStateToProps 