import { TextOver as Input } from "../../components/Inputs/TextOver";

function Login() {
  return (
    <div>
      
    </div>
  );
}

function Registration() {
  return (
    <div>
      <Input borderColor="black" />
    </div>
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