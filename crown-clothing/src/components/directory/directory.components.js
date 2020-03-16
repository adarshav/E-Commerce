import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import selectDirectorySections  from '../../redux/directory/directory.selectors';
import MenuItem from '../menu-items/menu-items-components';
import './directory.styles.scss';

//The directory will be having the class component the reason is here we have to maintain the state of menu-items
const  Directory = ({ sections }) => (  
  <div className = 'directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps}) => (
      <MenuItem  key = {id} {...otherSectionProps}/>
        // here ...otherSectionprops means other properties of section it is used because for the easy use
      ))
    }
  </div>
)

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToProps)(Directory);