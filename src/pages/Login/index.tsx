import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.png';

const Login: React.FC = () => {
  function handleSubmit(event: HTMLFormElement) {
    console.log(event.target.value);
  }

  return (
    <Container>
      <section>
        <img src={logo} alt="Restaurante Popular" />
        <form onSubmit={event => handleSubmit(event)}>
          <input
            type="text"
            name="username"
            placeholder="Digite seu nome de usuário"
          />
          <input
            type="password"
            name="password"
            placeholder="Digite sua Senha"
          />
          <button type="submit">Entrar</button>
        </form>
        <div>
          <Link to="/dashboard">Cadastrar-se</Link>
          <Link to="/dashboard">Esqueci a senha</Link>
        </div>
      </section>
    </Container>
  );
};

export default Login;
