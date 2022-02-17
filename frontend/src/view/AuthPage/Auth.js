import { InputTextOver as Input } from "../../components/Inputs/InputTextOver";
import { Button } from "../../components/Buttons/Button";
import './Auth.css';

function BaseForm(props) {
  
  let styles = {
    height: props.height
  }

  return (
    <div className="auth-base-form" style={styles}>
      <h1>{props.title}</h1>
      <div className="auth-base-form-inputs">
        {props.children}
      </div>
    </div>
  );
}

function Login() {
  return (
    <BaseForm title="Войти" height="422px">
      <Input color="white" height="29px" text="Логин или Почта" />
      <Input color="white" height="29px" text="Пароль" />
      <Button title="Войти" color="#66DE93" width="61px" height="33px" />
    </BaseForm>
  );
}

function Registration() {
  return (
    <BaseForm title="Регистрация" height="554px">
      <div className="two-inputs">
        <Input color="white" height="29px" text="Имя" />
        <Input color="white" height="29px" text="Фамилия" />
      </div>
      <Input color="white" height="29px" text="Логин" />
      <Input color="white" height="29px" text="Почта" />
      <Input color="white" height="29px" text="Пароль" />
      <Button title="Зарегестрироваться" color="#66DE93" width="159px" height="33px" />
    </BaseForm>
  );
}

/**
 * 
 * @param {{isLoginPage: boolean}} props 
 */
export default function Auth(props) {
  let PageContainer;
  if (props.isLoginPage) {
    PageContainer = <Login />
  } else {
    PageContainer = <Registration />
  }
  return (
    <div>
      {PageContainer}
    </div>
  );
}