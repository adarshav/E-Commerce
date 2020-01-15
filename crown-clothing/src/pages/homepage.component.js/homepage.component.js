import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.components';

//Functional component is used here because here we dont maintain any state 
const HomePage = () => (
    <div className = 'homePage'>
        {/* directory is passed to directory-components.js file */}
            {/* Here menu item is passed to menu-item component.js */}
        <Directory />
        </div> 
)

export default HomePage;