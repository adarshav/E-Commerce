import React from 'react';
import { Route, Link } from 'react-router-dom';

const HomePage = (props) => {
  console.log(props);
  return(
    <div>
      <h1>This is HomePage</h1>
      {/* Two ways of creating link  */}
      <Link to = '/topics'>Topics</Link>
      {/* the second one more dynamic */}
      <button onClick = {() => props.history.push('/topics')}>Topics</button>
    </div>
  )
}

const TopicsPage = (props) => {
  // console.log(props);
  return(
    <div>
      <h1>This is TopicsPage</h1>      
    </div>
  )
}

function App() {
  return (
    <div>
      <Route  exact path = '/' component = {HomePage}/>
      <Route  path = '/topics' component = {TopicsPage}/>
    </div>
  );
}

export default App;
