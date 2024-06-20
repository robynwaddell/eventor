import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

function Header() {
  const token = Cookies.get('token');
  const Username = Cookies.get('username');
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookies.remove('token');
    Cookies.remove('username');
    navigate('/login');
  };
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
          {
            token ? (
              <>
              <li className='line-down'>Welcome, {Username}</li>
              <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
              </>
            ) : (
              <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/login'>Login</NavLink></li>
            )
          }
          <li><NavLink className={({isActive}) => (isActive ? 'active' : '')} to='/profile'><i class="fa-solid fa-user"></i></NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header