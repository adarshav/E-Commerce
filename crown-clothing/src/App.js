import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Header from './header/header.component';
import HomePage from './pages/homepage.component.js/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, userProfileDocument } from './firebase/firebase.utils';
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
  constructor(props) {
    super(props);
//For firebase
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser : user});
      // userProfileDocument(user);
      // console.log(user);

      if(userAuth) {
        const userRef = await userProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // console.log(snapShot.data);
          this.setState({
            currentUser: {
              id:snapShot.id,
              ...snapShot.data()
            }
          })
          console.log(this.state);
        })
        
      } else {
        this.setState({currentUser:userAuth});
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        {/* <HomePage /> */}
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          {/* <Route  path = '/hats' component = {HatsPage}/> */}
          <Route  path = '/shop' component = {ShopPage}/>
          <Route  path = '/signin' component = {SignInAndSignUp}/>
        </Switch>
        {/* switch executes only one and not more */}
      </div>
    );
  }
  
}

export default App;

/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */