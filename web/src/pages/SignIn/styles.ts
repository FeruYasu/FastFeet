import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 425px;
  text-align: center;
  background: ${(props) => props.theme.colors.cardBackground};
  box-shadow: 0px 0px 10px #00000033;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  z-index: 1;

  h1 {
    font-style: italic;
    color: ${(props) => props.theme.colors.title};

    strong {
      color: ${(props) => props.theme.colors.accent};
    }
  }

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

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 10%;
  max-height: 800px;
`;
