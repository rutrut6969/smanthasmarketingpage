import React from 'react';
import { NavWrap, NavItem } from './styledComps/styles';

const Nav = () => {
  return (
    <NavWrap className='navWrapper'>
      <NavItem href='#'>About</NavItem>
      <NavItem href='#'>Contact</NavItem>
    </NavWrap>
  );
};

export default Nav;
