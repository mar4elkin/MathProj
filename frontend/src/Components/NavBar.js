import React from "react";
import Wave from "react-wavify";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isAuth === true) {
      return (
        <header className="nav-bar">
          <div className="nav-bar-container">
            <a href="#">
              <h1>MathProj</h1>
            </a>
            <nav className="nav-bar-navigation">
              <ul className="nav-bar-list">
                <li>
                  <a href="#">Регистрация</a>
                </li>
                <li>
                  <a href="#">Войти</a>
                </li>
              </ul>
            </nav>
          </div>
          <Wave
            className="nav-bar-wave"
            fill='#3DB2FF'
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
