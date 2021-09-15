import React from "react";
import AuthClose from "../Assets/AuthClose.png";
import Input from "../Components/Auth/Input";
import {SubmitAuthButton} from "../Components/Button";
import { Redirect } from 'react-router-dom'

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this)
    this.state = {
      redirect: false,
    }
  }

  handler(sname, value) {
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[sname] = value;
      return newState;
    })
  }

  componentDidMount(){
    if (this.props.isRegistration === true) {
      document.title = "Регистрация"
    } else {
      document.title = "Войти"
    }
  }

  componentDidUpdate() {
    if (this.props.isRegistration === true) {
      document.title = "Регистрация"
    } else {
      document.title = "Войти"
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/' />
    }
  }

  render() {
    if (this.props.isRegistration === true) {
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
                handler={this.handler}
              />
              <SubmitAuthButton
                title="Зарегестрироваться"
                width="159px"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="auth-block-container auth-log-slide-in-blurred-top">
          <div className="auth-block auth-log">
            {this.renderRedirect()}
            <img src={AuthClose} onClick={this.setRedirect}/>
            <h1>Войти</h1>
            <div className="auth-input-container">
              <Input
                title="Почта"
                sname="email"
                handler={this.handler}
              />
              <Input
                title="Пароль"
                sname="password"
                handler={this.handler}
              />
              <SubmitAuthButton
                title="Войти"
                width="61px"
              />
            </div>
          </div>
        </div>
      );
    }
  }
}