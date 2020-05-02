import React, { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo.png';

async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
  event.preventDefault();
  // TODO
}

const SignUp: React.FC = () => {
  return (
    <Container>
      <section>
        <img src={logo} alt="Restaurante Popular" />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome completo"
          />
          <input
            type="text"
            name="username"
            placeholder="Digite seu nome de usuário"
          />
          <input type="email" name="email" placeholder="Digite seu email" />

          <input
            type="password"
            name="password1"
            placeholder="Digite sua Senha"
          />
          <input
            type="password"
            name="password2"
            placeholder="Confirme sua Senha"
          />

          <button type="submit">Cadastrar</button>
        </form>
        <div>
          <Link to="/">Entrar</Link>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
