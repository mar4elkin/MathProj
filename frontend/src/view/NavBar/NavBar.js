import React from "react";
import './NavBar.css';
import { useSelector } from 'react-redux'
import Guest from '../GuestPage/Guest';
import Home from '../HomePage/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { 
  Navbar as BNavbar,
  Row,
  Nav,
  Container
} from 'react-bootstrap';

function NavBarUser() {
  return (
    <div>
      <BNavbar className="nvb-wrapper" expand="lg" >
        <Container>
          <Row>
            <BNavbar.Brand>MathProj MVP</BNavbar.Brand>
          </Row>
        </Container>
      </BNavbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

function NavBarGuest() {
  return (
    <div>
      <BNavbar className="nvb-wrapper" expand="lg" >
        <Container>
          <Row>
            <BNavbar.Brand>MathProj MVP</BNavbar.Brand>
          </Row>
          <Row>
            <BNavbar.Toggle aria-controls="basic-navbar-nav" />
            <BNavbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link" >Регистрация</Link>
                <Link to="/" className="nav-link" >Войти</Link>
              </Nav>
            </BNavbar.Collapse>
          </Row>
        </Container>
      </BNavbar>
      <Routes>
        <Route path="/" element={<Guest />} />
      </Routes>
    </div>
  );
}

export default function NavBar() {
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