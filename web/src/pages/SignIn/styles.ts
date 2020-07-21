import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const ImageContainer = styled.div`
  height: 600px;

  img {
    max-height: 100%;
    margin-left: 150px;
    border-radius: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 425px;
  text-align: center;
  background: #ffffff;
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 400px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    place-items: center;
  }

  button {
    margin: 5px 0 0;
    height: 44px;
    width: 72%;
    background: ${(props) => props.theme.colors.accent};
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => darken(0.04, props.theme.colors.accent)};
    }
  }
`;

export const Label = styled.p`
  color: #444444;
  text-align: start;
  width: 300px;
  padding: 15px 5px;
  font-size: 14px;
  font-weight: 700;
`;
