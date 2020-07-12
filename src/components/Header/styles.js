import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background: #000;
  padding: 10px 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 800px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-right: 1px solid #ddd;

  div {
    text-align: right;
    margin-right: 20px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #ddd;
    }
  }
`;

export const LogoutButton = styled.button`
  margin-left: 20px;
  height: 40px;
  width: 70px;
  background: #f94d6a;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;

  transition: all 0.5s;

  &:hover {
    background: ${lighten(0.08, '#F94D6A')};
  }
`;
