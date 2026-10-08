import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigator.css';

function Navigator() {
  return (
    <nav className="navigator">
      <NavLink to="/playlist">
        Плейлист
      </NavLink>
      
      <NavLink to="/deleted-songs">
        Удаленные песни
      </NavLink>
    </nav>
  );
}

export default Navigator;