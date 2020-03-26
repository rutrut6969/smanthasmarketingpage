import React from 'react';
import { NavWrap, NavItem } from './styledComps/styles';
// import { removeHide } from '../hide';
const Nav = props => {
  return (
    <NavWrap className='navWrapper'>
      <NavItem href='#'>About</NavItem>
      <NavItem href='#' onClick={props.onShow}>
        Contact
      </NavItem>
    </NavWrap>
  );
};

export default Nav;
