import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 0 10px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  img {
    margin-top: 30px;
    width: 100%;
    border-radius: 10px;
    object-fit: contain;
  }
`;

export const InfoMeet = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 24px;
    color: #fff;
  }

  span {
    font-size: 16px;
    color: #999;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;

  .editbutton {
    height: 40px;
    padding: 5px 30px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    transition: all 0.5s;

    &:hover {
      background: ${lighten(0.08, '#3b9eff')};
    }
  }

  .cancelbutton {
    margin-left: 20px;
    height: 40px;
    padding: 5px 30px;
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
  }
`;

export const Description = styled.div`
  p {
    margin-top: 15px;
    font-size: 14px;
    color: #ddd;
  }

  span {
    display: block;
    margin-top: 10px;
    font-size: 14px;
    color: #fff;
  }
`;

export const Footer = styled.div`
  margin-top: 25px;

  display: flex;
  flex-direction: row;

  p {
    display: flex;
    justify-content: center;

    margin-right: 30px;
    color: #666;
  }
`;
