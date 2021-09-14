import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PreviewPage from "./Views/PreviewPage";
import AuthPage from "./Views/AuthPage";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <Switch>
      <Route exact path="/">
        <PreviewPage />
      </Route>
      <Route path="/registration">
        <AuthPage isRegistration={true} />
      </Route>
      <Route path="/login">
        <AuthPage isRegistration={false} />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
