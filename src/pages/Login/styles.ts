import styled from 'styled-components';
import loginBG from '../../assets/login.jpg';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${loginBG});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    height: 90%;
    width: 90%;
    border-radius: 15px;
    background: #d0d0d040;
    border: 1px solid #d0d0d055;
    max-height: 450px;
    max-width: 400px;
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
    }
    h1 {
      margin-top: 10px;
    }
    form {
      margin: 10px 0;
      display: flex;
      flex-direction: column;
      width: 90%;
      input {
        margin-bottom: 15px;
        border: 2px solid #ccc;
        border-radius: 10px;
        padding: 10px;
      }
      button {
        background: #b57b07;
        color: #fff;
        border-radius: 10px;
        padding: 10px;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
    div {
      width: 80%;
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;
