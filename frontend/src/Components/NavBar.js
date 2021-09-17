import React from "react";
import Wave from "react-wavify";
import {Link} from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isAuth === false) {
      return (
        <header className="nav-bar">
          <div className="nav-bar-container">
            <Link to="/">
              <h1>MathProjMVP</h1>
            </Link>
            <nav className="nav-bar-navigation">
              <ul className="nav-bar-list">
                <li>
                  <Link to="/registration">Регистрация</Link>
                </li>
                <li>
                  <Link className="nav-bar-bordered" to="/login">Войти</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Wave
            className="nav-bar-wave"
            paused={false}
            options={{
              height: 12,
              amplitude: 20,
              speed: 0.23,
              points: 9
            }}
          />
        </header>
      );
    } else {
      return (
        <h1>Old User</h1>
      );
    }
  }
}
