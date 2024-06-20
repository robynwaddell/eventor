import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="title">
        <h1><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/'>eventor</NavLink></h1>
      </div>
      <nav className="nav">
        <ul>
          <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/events'>Find an Event</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'active' : '')}to='/hosts'>Find a Host</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/create-event'>Create an Event</NavLink></li>
          <li><NavLink className={navData => (navData.isActive ? 'active' : '')} to='/login'>Login</NavLink></li>
          <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/profile'><i class="fa-solid fa-user"></i></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header