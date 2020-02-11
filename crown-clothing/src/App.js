import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage.component.js/homepage.component';
import ShopPage from './pages/shop/shop.component';

// used for demonstraation purpose

// const HatsPage = props => {
//   console.log(props);
//   return(
//   <div>
//     <h1>This is Hats Page {props.location.pathname}</h1>
//   </div>
// )}


function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        {/* <Route  path = '/hats' component = {HatsPage}/> */}
        <Route  path = '/shop' component = {ShopPage}/>
      </Switch>
      {/* switch executes only one and not more */}
    </div>
  );
}

export default App;

/*
  while using react router dom first we have to install the package[npm install react-router-dom]
  react-router component has three properties history, match, location and these 3 can b accessed using withRouter function
 */