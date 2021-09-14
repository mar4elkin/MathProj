import React from "react";
import AuthClose from "../Assets/AuthClose.png";
import Input from "../Components/Auth/Input";
import {SubmitAuthButton} from "../Components/Button";

export default class AuthPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isRegistration === true) {
      return (
        <div className="auth-block-container">
          <div className="auth-block auth-reg">
            <img src={AuthClose} />
            <h1>Регистрация</h1>
            <div className="auth-input-container">
              <div className="auth-block-container-in-row">
                <Input
                  title="Имя"
                  id="name"
                />
                <Input
                  title="Имя"
                  id="name"
                />
              </div>
              <Input
                title="Имя"
                id="name"
              />
              <Input
                title="Имя"
                id="name"
              />
              <Input
                title="Имя"
                id="name"
              />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="auth-block-container">
          <div className="auth-block auth-log">
            <img src={AuthClose} />
            <h1>Войти</h1>
            <div className="auth-input-container">
              <Input
                title="Имя"
                id="name"
              />
              <Input
                title="Имя"
                id="name"
              />
              <SubmitAuthButton
                title="submit"
              />
            </div>
          </div>
        </div>
      );
    }
  }
}