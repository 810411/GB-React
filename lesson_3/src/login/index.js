import React from 'react';
import './login.css';

const LoginItem = ({label, type, placeholder}) => {
  return (
    <div className="login-item">
      <label htmlFor={type}>{label}</label>
      <input type={type} id={type} placeholder={placeholder} autoComplete="off"/>
    </div>
  )
};

const Login = ({handleLoginOn}) => {
  return (
    <div className="login-form">
      <h2>Логин</h2>
      <hr/>
      <form>
        <LoginItem type="email" label="Введите Email: " placeholder="example@mail.com"/>
        <LoginItem type="pass" label="Введите пароль: " placeholder="********"/>
        <button onClick={event => handleLoginOn(event)}>Войти</button>
      </form>
    </div>
  )
};

export default Login
