import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ContextApi } from '../context/contextApi';
import '../style/page/login.sass'

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
    <div className='login-container'>
    <h2>LOGIN</h2>
    <form onSubmit={handleSubmit}>
    <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input
              className="input"
              type="email"
              id='email'
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input
              className="input"
              type="password"
              id='password'
              placeholder="Senha"
              value={password}
              onChange={handleChange}
            />
          </p>
        </div>
      <div className="field">
        <p className="buttons">
        <button className="button is-success">
            Login
          </button>
        </p>
      </div>
    </form>
    <p>
      Ainda não tem uma conta? <Link className='signup' to="/signup">Cadastre-se</Link>
    </p>
  </div>
  );
}

export default Login;