import './NavBar.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice'
import React, { useState, useEffect } from 'react';

import Guest from '../GuestPage/Guest';
import Home from '../HomePage/Home';
import Auth from '../AuthPage/Auth';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

function NavBarUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const backendUrl = useSelector(state => state.user.backendUrl);
  const token = useSelector(state => state.user.token);
  const [userData, setUserData] = useState({});

  async function getUserInfo() {
    let requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
      },
      redirect: 'follow'
    };

    const response = await fetch(`${backendUrl}/rest-auth/user/`, requestOptions);
    const result = await response.json();
    return result;
  }

  function handleUserLogout() {
    let requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    };

    fetch(`${backendUrl}/rest-auth/logout/`, requestOptions)
    .then(response => {
      if (response.status == 200) {
        dispatch(logout())
        navigate('/')
      }
    })
    .catch(error => console.log('error', error));
  }

  useEffect(() => {
    getUserInfo()
    .then(result => {
      setUserData(result)
    })

  }, []);

  console.log(userData)

  return (
    <div className="main">
      <div className="nvb">
        <div className="nvb-links authd-user">
          <Link to="/">
            <span>MathProjMvp</span>
          </Link>
          <Link to="/catalog">Каталог тестов</Link>
          <Link to="/my-tests">Мои задачи</Link>
          <Link to="/rating">Рейтинг</Link>
        </div>
        <div className="nvb-links">
          <Link to="/profile">
            <img src={userData.profile_image} alt='profile_image' />
          </Link>
          <Link to="/" onClick={() => handleUserLogout()} >Выйти</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Home />} />
        <Route path="/catalog" element={<Home />} />
        <Route path="/my-tests" element={<Home />} />
        <Route path="/rating" element={<Home />} />
      </Routes>
    </div>
  );
}

function NavBarGuest(props) {
  return (
    <div className="main">
      <div className="nvb">
        <Link to="/">
          <span>MathProjMvp</span>
        </Link>
        <div className="nvb-links">
          <Link to="/registration">Зарегистрироваться</Link>
          <Link to="/login">Войти</Link>
        </div>
      </div>
      <Routes>
        <Route path='/login' element={<Auth isLoginPage={true} />} />
        <Route path='/registration' element={<Auth isLoginPage={false} />} />
        <Route path="/" element={<Guest />} />
      </Routes>
    </div>
  );
}

export default function NavBar() {
  document.title = 'MP mvp \u03b1 0.0.1'
  const isLoggedIn = useSelector((state) => state.user.isUserAuth);
  let NavBarContainer;

  if (isLoggedIn) {
    NavBarContainer = <NavBarUser/>
  } else {
    NavBarContainer = <NavBarGuest/>
  }
  
  return (
    <Router>
      {NavBarContainer}
    </Router>
  );
}