import React from "react";
import Wave from "react-wavify";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PreviewPage from "../Views/PreviewPage";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isAuth === true) {
      return (
        <Router>
          <header className="nav-bar">
            <div className="nav-bar-container">
              <Link to="/">
                <h1>MathProj</h1>
              </Link>
              <nav className="nav-bar-navigation">
                <ul className="nav-bar-list">
                  <li>
                    <Link to="/">Регистрация</Link>
                  </li>
                  <li>
                    <Link className="nav-bar-bordered" to="/">Войти</Link>
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
          <Switch>
            <Route path="/">
              <PreviewPage />
            </Route>
          </Switch>
        </Router>
      );
    } else {
      return (
        <h1>Old User</h1>
      );
    }
  }
}
