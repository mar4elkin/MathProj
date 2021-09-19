import React from "react"
import AuthClose from "../Assets/AuthClose.png"
import Input from "../Components/Auth/Input"
import {SubmitAuthButton} from "../Components/Button"
import {Redirect } from 'react-router-dom'
import projectConstants from '../constants'
import {getJwtToken, setJwtToken} from '../Storage/Worker'



class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      redirect: false,
      logged_in: !!getJwtToken()
    }
  }

  handler(sname, value) {
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[sname] = value;
      return newState;
    })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect push to={{
        pathname:'/',
        }}
      />
    }
  }
}

export class Login extends AuthPage {
  constructor(props) {
    super(props);
    document.title = "Войти"
  }

  handleLogin() {
    let data = {
      username: this.state.username,
      password: this.state.password
    }

    fetch(projectConstants.backend_url + '/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => setJwtToken(result))
      .catch(error => console.log('error', error))

  }

  render() {
    return (
      <div className="auth-block-container auth-log-slide-in-blurred-top">
        <div className="auth-block auth-log">
          {this.renderRedirect()}
          <img src={AuthClose} onClick={this.setRedirect}/>
          <h1>Войти</h1>
          <div className="auth-input-container">
            <Input
              title="Логин"
              sname="username"
              handler={this.handler}
            />
            <Input
              title="Пароль"
              sname="password"
              type="password"
              handler={this.handler}
            />
            <SubmitAuthButton
              title="Войти"
              width="61px"
              redirect={true}
              onclick={() => {
                this.handleLogin()
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export class Registration extends AuthPage {
  constructor(props) {
    super(props);
    document.title = "Регистрация"
  }

  getToken(response, password) {

    let data = {
      username: response.username,
      password: this.state.password
    }

    fetch(projectConstants.backend_url + '/token/', {
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

  handleSingUp() {
    let data = {
      username: this.state.username,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password
    }

    fetch(projectConstants.backend_url + '/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => this.getToken(result))
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="auth-block-container auth-reg-slide-in-blurred-top">
        <div className="auth-block auth-reg">
          {this.renderRedirect()}
          <img src={AuthClose} onClick={this.setRedirect}/>
          <h1>Регистрация</h1>
          <div className="auth-input-container">
            <div className="auth-block-container-in-row">
              <Input
                title="Имя"
                sname="first_name"
                handler={this.handler}
              />
              <Input
                title="Фамилия"
                sname="last_name"
                handler={this.handler}
              />
            </div>
            <Input
              title="Логин"
              sname="username"
              handler={this.handler}
            />
            <Input
              title="Почта"
              sname="email"
              handler={this.handler}
            />
            <Input
              title="Пароль"
              sname="password"
              type="password"
              handler={this.handler}
            />
            <SubmitAuthButton
              title="Зарегестрироваться"
              width="159px"
              onclick={() => {
                this.handleSingUp()
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}