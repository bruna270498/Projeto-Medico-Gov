import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ContextApi } from '../context/contextApi';

function Login() {
    const {email, setEmail, password, setPassword} = useContext(ContextApi)

  const handleEmailChange = (event) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            id="email"
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder='Senha'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;