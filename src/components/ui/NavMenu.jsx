import React from 'react';
import { NavLink } from 'react-router';

const NavMenu = ({to, children, className}) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `font-medium rounded-full p-2 mr-2 mb-2 ${className} ${isActive ? " border border-green-500 " : ""}`
        }
      >
        {children}
      </NavLink>
    );
};

export default NavMenu;