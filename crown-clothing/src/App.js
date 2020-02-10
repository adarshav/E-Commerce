import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage.component.js/homepage.component';

const HatsPage = props => {
  console.log(props);
  return(
  <div>
<h1>This is Hats Page {props.location.pathname}</h1>
  </div>
)}

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path = '/' component = {HomePage}/>
        <Route  path = '/hats' component = {HatsPage}/>
      </Switch>
      {/* switch executes only one and not more */}
    </div>
  );
}

export default App;

/*
  while using react router dom first we have to install the package[npm install react-router-dom]
 */