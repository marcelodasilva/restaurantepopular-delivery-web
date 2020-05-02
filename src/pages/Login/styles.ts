import styled from 'styled-components';
import loginBG from '../../assets/login.jpg';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.83), rgba(0, 0, 0, 0.83)),
    url(${loginBG});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border-radius: 15px;
    background: #fff;
    width: 90%;
    max-width: 400px;
    height: 400px;
    padding: 20px;
    display: flex;
  }
`;
