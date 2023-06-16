import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../context/contextApi';

function Login() {
  const { email, setEmail, password, setPassword } = useContext(ContextApi);
  const navigate = useNavigate();

  const handleChange = ({target}) => {
    switch (target.id) {
      case 'email':
        setEmail(target.value)
        break;
      case 'password':
        setPassword(target.value)
        break;
      default:
        break;
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    validate();
  };

  const validate = () => {
    if (email === 'user@com.com' && password === 'p') {
      navigate('/patient');
    } else {
      alert('Email ou senha invalidos')
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
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Entrar
        </button>
      </form>
      <p>
        Ainda não tem uma conta? <Link to="/signup">Cadastre-se</Link>
      </p>
    </div>
  );
}

export default Login;