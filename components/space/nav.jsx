import React from 'react';
import './nav.scss';

const Nav = () => {

  return(
    <nav className="spacenav_main_cont">
      <ul>
        <li>
          <button>inicio</button>
          <div className="line" />
        </li>
        <li>
          <button>muro</button>
          <div className="line" />
        </li>
        <li>
          <button>amigos</button>
          <div className="line" />
        </li>
        <li>
          <button>eventos</button>
          <div className="line" />
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
