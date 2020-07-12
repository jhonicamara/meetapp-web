import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 800px;
  margin: 50px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 24px;
      color: #fff;
    }

    button {
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 5px 30px;

      &:hover {
        background: ${lighten(0.04, '#f94d6a')};
      }
    }
  }

  ul {
    margin-top: 30px;
  }
`;

export const MeetUp = styled.button`
  width: 100%;
  padding: 20px;
  border: 0;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.2s;

  strong {
    color: #fff;
  }

  span {
    color: #666;
  }

  &:hover {
    background: ${lighten(0.2, 'rgba(0, 0, 0, 0.1)')};
  }
`;
