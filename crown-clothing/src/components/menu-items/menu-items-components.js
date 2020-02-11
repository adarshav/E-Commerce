import React from 'react';
import './menu-items.styles.scss'
import { withRouter } from 'react-router-dom';
// withRouter is a higher order component and function which takes component as an argument and turns as a  modified component

//usung functional component for now because as we are not maintaining any state
const MenuItem = ({title, imageUrl, size, history, linkUrl, match }) => (
    <div  className = {`${size} menu-item `}
    onClick  = {() => history.push(`${match.url}${linkUrl}`)} >
        {/* for routes props history match location visit react-router-learning.
        Here match.url provides '/' at homepage and linkUrl is appended to it*/}
        <div className = 'background-image' 
        style = {{
            backgroundImage: `url(${imageUrl})`
    
        }}/>

                <div className = 'content'>
                    <h1 className = "title"> {title.toUpperCase()}</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
    </div>
);
export default withRouter(MenuItem);
// if you want that your component receive RouterProps, but don't want to wrap it in <Route component={Some}>. You can just use withRouter function to connect component to the router, without additional manipulations or jsx tags wrapping. You can just "export default withRouter(component)". https://reacttraining.com/react-router/web/api/withRouter - you can read more there about usage.

// The child of the Router won’t render the Routes components, so we’ll need to make use of withRouter() to retain access to the necessary props.