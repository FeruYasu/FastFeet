import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
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
    color: ${(props) => props.theme.colors.title};
  }

  form {
    display: flex;
    flex-direction: column;

    p {
      color: ${(props) => props.theme.colors.title};
      font-weight: bold;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    input {
      background: ${(props) => props.theme.colors.inputBackground} 0% 0%
        no-repeat padding-box;
      height: 45px;
      border-radius: 4px;
      padding: 10px;
      width: 100%;
    }
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 10px 30px 40px 30px;
  border-radius: 4px;
`;

export const SelectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: ${(props) => props.theme.colors.title};
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
  background: ${(props) => props.theme.colors.button};
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
    background: ${(props) => darken(0.03, props.theme.colors.button)};
  }
`;

export const SaveButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
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
