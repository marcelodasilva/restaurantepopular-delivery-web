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
          <input type="email" name="email" placeholder="Digite seu email" />

          <button type="submit">Recuperar Senha</button>
        </form>
        <div>
          <Link to="/">Entrar</Link>
        </div>
      </section>
    </Container>
  );
};

export default SignUp;
