import React from 'react';
import { NavWrap, NavItem } from './styledComps/styles';
import { Link } from 'react-router-dom';
// import { removeHide } from '../hide';
const Nav = props => {
  return (
    <NavWrap className='navWrapper'>
      <Link to='/' className='navItem'>
        Home
      </Link>
      <Link to='/about' className='navItem'>
        About
      </Link>
      <NavItem href='#' onClick={props.onShow}>
        Contact
      </NavItem>
    </NavWrap>
  );
};

export default Nav;
