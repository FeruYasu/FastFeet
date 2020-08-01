import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 10px;
  padding: 16px 0;
  width: 100%;
  display: flex;
  align-items: center;
  color: #666360;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary};
      color: ${props.theme.colors.primary};
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #000;
    `}


    input {
      background: #fff;
      height: 45px;
      padding: 0 15px;
      color: ${(props) => props.theme.colors.text};
      width: 300px;
      border: 1px solid #dddddd;
      border-radius: 4px;

      ${(props) =>
        props.isFocused &&
        css`
          border-color: ${props.theme.colors.primary};
        `}

      &::placeholder {
        color: #999999;
        font-size: 16px;
      }
    }

  svg {
    margin-right: 16px;
  }
`;
