import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { AppContext } from '../AppContext'; 

const initialUsers = [
  { username: 'amrutha', password: 'pass1' },
  { username: 'anu', password: 'pass2' },
  { username: 'ajay', password: 'pass3' },
  { username: 'anil', password: 'pass4' },
  { username: 'achu', password: 'pass5' },
  { username: 'manu', password: 'pass6' },
  { username: 'aparna', password: 'pass7' },
  { username: 'akku', password: 'pass8' },
  { username: 'amar', password: 'pass9' },
  { username: 'anitha', password: 'pass10' }
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(initialUsers));
    }
  }, []);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      dispatch({ type: 'SET_USER', payload: username });
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <div className='form'>
      <div>
        <input className='input'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <input className='input'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button className='button_design' onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
};

export default Login;
