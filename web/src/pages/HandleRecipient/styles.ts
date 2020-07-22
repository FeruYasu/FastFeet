import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #f5f5f5;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;

  h1 {
    margin: 30px 0;
  }

  form {
    display: flex;
    flex-direction: column;

    p {
      color: #444444;
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    input {
      border: 1px solid #dddddd;
      height: 45px;
      border-radius: 4px;
      color: #999999;
      padding: 10px;
      width: 100%;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  background: #fff;
  padding: 10px 30px 40px 30px;
  border-radius: 4px;
  flex-wrap: wrap;
`;

export const InputContainer = styled.div`
  margin: 0;

  &:first-child {
    width: 100%;
  }

  &:nth-child(2) {
    width: calc(60% - 10px);
    margin-right: 10px;
  }

  &:nth-child(3) {
    width: calc(20% - 10px);
    margin-right: 10px;
  }

  &:nth-child(4) {
    width: 20%;
  }

  &:nth-child(n + 5) {
    width: calc(33.33% - 10px);
    margin-right: 10px;
  }

  &:last-child {
    width: 33.33%;
    margin-right: 0px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
`;

export const BackButton = styled.button`
  background: #cccccc;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 112px;
  height: 36px;
  font-size: 14px;
  display: flex;
  place-items: center;
  margin-right: 10px;
  justify-content: center;

  &:hover {
    background: ${darken(0.03, '#cccccc')};
  }
`;

export const SaveButton = styled.button`
  background: #7d40e7;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 112px;
  height: 36px;
  font-size: 14px;
  display: flex;
  place-items: center;
  justify-content: center;
  text-align: left;

  &:hover {
    background: ${darken(0.03, '#7d40e7')};
  }
`;
