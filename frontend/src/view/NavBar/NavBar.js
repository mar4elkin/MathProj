import './NavBar.css';
import { useSelector } from 'react-redux';

import Guest from '../GuestPage/Guest';
import Home from '../HomePage/Home';
import Auth from '../AuthPage/Auth';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function NavBarUser() {
  return (
    <div className="main">
      <div className="nvb">
        <Link to="/">
          <span>MathProjMvp</span>
        </Link>
        <div className="nvb-links">
          <Link to="/">Выйти</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
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