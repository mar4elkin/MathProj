import { InputTextOver as Input } from "../../components/Inputs/InputTextOver";
import { Button } from "../../components/Buttons/Button";
import './Auth.css';

import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice'
import Identicon from 'identicon.js';

/**
 * 
 * @param  {...Array} param: [value, type]
 * @returns {Array<String>}
 */
function validator(...param) {
  let emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  let message = [];

  param.forEach(el => {
    
    let value = el[0];
    let type = el[1];

    switch (type) {
      case 'name':
        if (value == '' || value.length < 4) {
          message.push('bad name');
        }
        break;
      case 'second-name':
        if (value == '' || value.length < 3) {
          message.push('bad second-name');
        }
        break;
      case 'username':
        if (value == '' || value.length < 5) {
          message.push('bad username');
        }
        break;
      case 'email':
        if (value == '' || value.length < 6 || !emailRegExp.test(value)) {
          message.push('bad email');
        }
        break;
      case 'password':
        if (value == '' || !passwordRegExp.test(value)) {
          message.push('bad password');
        }
        break;
      default:
        break
    }
  })
  return message;
}

function BaseForm(props) {
  
  let styles = {
    height: props.height
  };

  return (
    <div className="auth-base-form" style={styles}>
      <h1>{props.title}</h1>
      <form onSubmit={props.onSubmit}>
        <div className="auth-base-form-inputs">
          {props.children}
        </div>
      </form>
    </div>
  );
}

function Login() {
  const backendUrl = useSelector(state => state.user.backendUrl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleSubmit(e) {
    let validationResult = validator(
      [email, 'email'],
      [password, 'password']
    );

    if (validationResult.length == 0) {
      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        redirect: 'follow'
      };

      fetch(`${backendUrl}/rest-auth/login/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.key) {
          dispatch(login(String(result.key)))
          navigate('/')
        } else if (result.non_field_errors) {
          alert(result.non_field_errors[0])
        }
      })
      .catch(error => console.log('error', error));
    } else {
      validationResult.forEach(el => {
        alert(el);
      })
    }
    e.preventDefault();
  }

  return (
    <BaseForm title="Войти" height="422px" onSubmit={(e) => handleSubmit(e)}>
      <Input color="white" height="29px" text="Почта" value={email} handler={(e) => handleChange(e, setEmail)} />
      <Input color="white" height="29px" text="Пароль" inputType="password" value={password} handler={(e) => handleChange(e, setPassword)} />
      <Button title="Войти" color="#66DE93" width="61px" height="33px" />
    </BaseForm>
  );
}

function Registration() {
  const backendUrl = useSelector(state => state.user.backendUrl);
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange(e, setter) {
    setter(e.target.value);
  }

  function handleSubmit(e) {  
    let validationResult = validator(
      [name, 'name'],
      [secondName, 'second-name'],
      [login, 'username'],
      [email, 'email'],
      [password, 'password']
    ) 

    if (validationResult.length == 0) {

      String.prototype.hexEncode = function(){
          let hex, i;
          let result = "";
          for (i=0; i<this.length; i++) {
              hex = this.charCodeAt(i).toString(16);
              result += ("000"+hex).slice(-4);
          }
          return result
      }

      let image = new Identicon(email.hexEncode(), 200).toString()

      let requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          username: login,
          password1: password,
          password2: password,
          first_name: name,
          second_name: secondName,
          profile_image: image
        }),
        redirect: 'follow'
      };

      fetch(`${backendUrl}/rest-auth/registration/`, requestOptions)
      .then(response => {
        if (response.status == 201) {
          navigate('/login')
        }
      })
      .catch(error => console.log('error', error));
    
    } else {
      validationResult.forEach(el => {
        alert(el);
      })
    }
    e.preventDefault();
  }

  return (
    <BaseForm title="Регистрация" height="554px" onSubmit={(e) => handleSubmit(e)}>
      <div className="two-inputs">
        <Input color="white" height="29px" text="Имя" handler={(e) => handleChange(e, setName)} value={name} />
        <Input color="white" height="29px" text="Фамилия" handler={(e) => handleChange(e, setSecondName)} value={secondName}/>
      </div>
      <Input color="white" height="29px" text="Логин" handler={(e) => handleChange(e, setLogin)} value={login} />
      <Input color="white" height="29px" text="Почта" handler={(e) => handleChange(e, setEmail)} value={email} />
      <Input color="white" height="29px" text="Пароль" handler={(e) => handleChange(e, setPassword)} value={password} inputType="password"/>
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