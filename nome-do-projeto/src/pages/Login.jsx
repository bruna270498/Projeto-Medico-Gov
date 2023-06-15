import React, { useState, useContext } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para autenticar o usuário
    // usando o email e a senha fornecidos
    // Simulando a autenticação com email e senha
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
    </div>
  );
}

export default Login;