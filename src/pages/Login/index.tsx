import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.png';

async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
  event.preventDefault();
  // TODO
}

const Login: React.FC = () => {
  return (
    <Container>
      <section>
        <img src={logo} alt="Restaurante Popular" />
        <form onSubmit={handleSubmit}>
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
          <Link to="/register">Cadastrar-se</Link>
          <Link to="/recover_password">Esqueci a senha</Link>
        </div>
      </section>
    </Container>
  );
};

export default Login;
