import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import './UserForm.css';
import Fetch from "../fetch/Fetch";

const UserForm = (props) => {

  const history = useHistory();
  const type = props.type;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleUserNameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(username === '' || password === '') {
      setUsername(username);
      setPassword(password);
      setError('Missing username or password!');
    } else {
      setSubmitted(true);
    }
  }

  useEffect(() => {
    if(submitted) {
      let body = {
        username: username,
        password: password,
      }
      if(type === 'Register') {
        Fetch('/register', 'POST', body)
          .then(result => {
            let inputs = document.querySelectorAll('input');
            Array.from(inputs).forEach(input => (input.innerText = ''));
          })
          .catch(error => {
            setUsername(username);
            setPassword(password);
            setError(error.toString());
          });
      }
      if(type === 'Login') {
        Fetch('/login', 'POST', body)
          .then(result => {
            localStorage.setItem('token', result.token.data.token);
            localStorage.setItem('userid', result.userid);
            localStorage.setItem('username', result.username);
            setUsername(result.username);
            history.push('/main');
          })
          .catch(error => {
            setUsername(username);
            setPassword(password);
            setError(error.toString());
          });
      }
    }
  }, [submitted]);

  return(
    <div className='user-form-container'>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <InputField placeholder={'Username'} inputType={'text'} onChangeFunction={handleUserNameChange} name={'username'} />
        <InputField placeholder={'Password'} inputType={'password'} onChangeFunction={handlePasswordChange} name={'password'} />
        <SubmitButton buttonText={type} />
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default UserForm;
