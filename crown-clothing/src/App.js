import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Header from './header/header.component';
import HomePage from './pages/homepage.component.js/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, userProfileDocument } from './firebase/firebase.utils';

import CheckoutPage from './pages/checkout/checkout.component';
//get the currentUser from the userActions
import { setCurrentUser } from './redux/user/user.actions';
// App.js will be changed to class component because the state of the users should be available to all the components


// used for demonstraation purpose

// const HatsPage = props => {
//   console.log(props);
//   return(
//   <div>
//     <h1>This is Hats Page {props.location.pathname}</h1>
//   </div>
// )}


class App extends React.Component  {
  // when redux is been implemented through mapDispatchProps where state have been maintained in reducers this state is not used
//   constructor(props) {
//     super(props);
// //For firebase
//     this.state = {
//       currentUser: null
//     }
//   }

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props; 

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user});
      // userProfileDocument(user);
      // console.log(user);

      if(userAuth) {
        const userRef = await userProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data);
          //coming from userActions
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
        }); 
        
      } else {
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        {/* <Header currentUser = {this.state.currentUser}/> */}
        <Header />
        {/* <HomePage /> */}
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          {/* <Route  path = '/hats' component = {HatsPage}/> */}
          <Route  path = '/shop' component = {ShopPage}/>
          {/* <Route exact path = '/signin' component = {SignInAndSignUp}/> */}
          {/* instead of component in Route use render which is a function  */}
          <Route exact path = '/signin' render = {() => this.props.currentUser ? (<Redirect to = '/' />) :               ( <SignInAndSignUp />) }/>
          <Route exact path = '/checkout' component = { CheckoutPage} />
        </Switch>
        {/* switch executes only one and not more */}
      </div>
    );
  }
  
}
// this is to have an access of currentUser and redirect to another page once he successfully logs in.
const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})
//it is a function and it gets dispatch property and setCurrentUser is a function where dispatch in a second line tells to the redux whatever object u r passing to me is an action which triggers to rootReducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */

//  After implementing redux to the application, Here there is a problem 1.if user signs in the user will be still in sign-in page which may cause an error so that if the user logs in he should be redirected to shop page. That will be seen now, If we want to make the mentioned we should have an access to the currentUser which is in rootReducer that objective can be achieved by mapStateToProps so that we have the access of currentUser who have logged in.

// CartIcon has been implemented with dropdown 

// After CartIcon has been done now we have to make the items to add to the cart which are in the collections lets make it 