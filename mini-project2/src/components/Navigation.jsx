import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
        <li><NavLink to="/teams" className={({ isActive }) => (isActive ? 'active' : '')}>Teams</NavLink></li>
        
        <li><NavLink to="/news" className={({ isActive }) => (isActive ? 'active' : '')}>News</NavLink></li>
        <li><NavLink to="/community" className={({ isActive }) => (isActive ? 'active' : '')}>Community</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;
