import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = ({ to, label, showMenuHandler }) => (
  <li  onClick={showMenuHandler} className="nav-item">
    <NavLink to={to} className="nav-link">
      {label}
    </NavLink>
  </li>
);

export default Link;
