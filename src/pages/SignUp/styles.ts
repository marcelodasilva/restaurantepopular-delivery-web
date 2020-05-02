import styled from 'styled-components';
import { shade } from 'polished';
import loginBG from '../../assets/login.jpg';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${loginBG}) bottom;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  section {
    height: auto;
    width: 90%;
    border-radius: 15px;
    background: #d0d0d030;
    border: 1px solid #d0d0d060;
    max-height: 800px;
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
        border-bottom: 3px solid #fff;
        border-radius: 10px;
        padding: 10px;
        transition: border ease-in-out 250ms;
        &:focus {
          border-bottom: 3px solid #b57b07;
        }
      }
      button {
        background: #b57b07;
        color: #fff;
        border-radius: 10px;
        padding: 10px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color linear 250ms;
        &:hover {
          background: ${shade(0.2, '#b57b07')};
        }
      }
    }
    div {
      width: 80%;
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      a {
        text-decoration: none;
        color: #fff;
        font-size: 16px;
        transition: color ease-in-out 350ms;
        &:hover {
          color: #b57b07;
        }
      }
    }
  }
`;
