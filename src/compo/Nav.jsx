import React from 'react';

import { NavLink } from 'react-router-dom';
const Nav = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><NavLink to="/" end>홈</NavLink></li>
        <li><NavLink to="/tops">상의</NavLink></li>
        <li><NavLink to="/bottoms">하의</NavLink></li>
        <li><NavLink to="/acc">악세사리</NavLink></li>
        <li><NavLink to="/shoes">신발</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav