import { TextOver as Input } from "../../components/Inputs/TextOver";
import './Auth.css';

function BaseForm(props) {
  console.log(props)
  return (
    <div className="auth-base-form">
      <h2>{props.title}</h2>
      <div className="auth-base-form-inputs">
        {props.children}
      </div>
    </div>
  );
}

function Login() {
  return (
    <div>
      
    </div>
  );
}

function Registration() {
  return (
    <BaseForm title="Регистрация">
      <Input color="white" height="19px" width="100%" text="test" />
      <Input color="white" height="19px" width="100%" text="test" />
      <Input color="white" height="19px" width="100%" text="test" />
      
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