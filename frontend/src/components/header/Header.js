import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from 'react-router-dom';
import './Header.css'

const Header = () => {

  const history = useHistory();
  const [title, setTitle] = useState('WELCOME TO GREENBAY');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const tokenCheck = () => {
    if(localStorage.getItem('token')) {
      setIsLoggedIn(true);
      setTitle('user');
    } else {
      setIsLoggedIn(false);
      setTitle('WELCOME TO GREENBAY');
    }
  }

  const guest = (
    <div className='header-container'>
      <div className='header-left'>
        <p className='header-title'>{title}</p>
      </div>
      <div className='header-right'>
        <NavLink className='header-element-buttontext' to={'/login'}>
          <div className='header-element'>
            <p className='header-element-buttontext'>LOGIN</p>
          </div>
        </NavLink>
        <NavLink className='header-element-buttontext' to={'/register'}>
          <div className='header-element'>
            <p className='header-element-buttontext'>REGISTER</p>
          </div>
        </NavLink>
      </div>
    </div>
  );

  const user = (
    <div className='header-container'>
      <div className='header-left'>
        <p className='header-title'>{title}</p>
      </div>
      <div className='header-right'>
        <NavLink className='header-element-buttontext' to={'/login'}>
          <div className='header-element'>
            <p className='header-element-buttontext'>SETTINGS</p>
          </div>
        </NavLink>
        <NavLink className='header-element-buttontext' to={'/register'}>
          <div className='header-element'>
            <p className='header-element-buttontext' onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('userid');
              localStorage.removeItem('username');
              history.push('/login');
            }}>LOGOUT</p>
          </div>
        </NavLink>
      </div>
    </div>
  );

  useEffect(() => {
    tokenCheck();
  }, []);

  return isLoggedIn ? user : guest;

}

export default Header;
