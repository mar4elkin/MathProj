import './App.scss'
import NavBar from "./Components/NavBar"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PreviewPage from "./Views/PreviewPage"
import { Login, Registration } from "./Views/AuthPage"
import projectConstants from "./constants";
import {checkExpDate, getJwtToken, setJwtToken} from "./Storage/Worker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logged_in: !!getJwtToken()
    }
  }

  refreshToken(callback) {
    if (callback) {

      let data = {
        refresh: getJwtToken().refresh
      }

      fetch(projectConstants.backend_url + '/token/refresh/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(result => setJwtToken(result))
        .catch(error => console.log('error', error));
    }
  }

  componentDidMount() {
    if (!this.state.logged_in) {
      let token = getJwtToken()
      if (token !== null) {
        this.refreshToken(checkExpDate())
      }
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar isAuth={this.state.logged_in}/>
          <Switch>
            <Route exact path="/">
              <PreviewPage />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
