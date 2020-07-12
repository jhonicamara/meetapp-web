import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 0 10px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.7);
    margin: 10px 0 20px;
  }

  span {
    color: #fb6f91;
    align-self: center;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    width: 100%;
    margin: 5px 0 0;
    height: 44px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.04, '#f94d6a')};
    }
  }
`;
