import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { MdSearch } from 'react-icons/md';

interface ColorProps {
  color: 'Entregue' | 'Cancelado' | 'Retirado' | 'Pendente';
}

const color = {
  Entregue: css`
    color: ${(props) => props.theme.entregue.color};
    background: ${(props) => props.theme.entregue.background};
  `,
  Cancelado: css`
    color: ${(props) => props.theme.cancelado.color};
    background: ${(props) => props.theme.cancelado.background};
  `,
  Retirado: css`
    color: ${(props) => props.theme.retirado.color};
    background: ${(props) => props.theme.retirado.background};
  `,
  Pendente: css`
    color: ${(props) => props.theme.pendente.color};
    background: ${(props) => props.theme.pendente.background};
  `,
};

const background = {
  Entregue: css`
    background-color: ${(props) => props.theme.entregue.color};
  `,
  Cancelado: css`
    background-color: ${(props) => props.theme.cancelado.color};
  `,
  Retirado: css`
    background-color: ${(props) => props.theme.retirado.color};
  `,
  Pendente: css`
    background-color: ${(props) => props.theme.pendente.color};
  `,
};

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  height: 1000px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;

  h1 {
    margin: 50px 0;
    color: ${(props) => props.theme.colors.title};
  }

  ul {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 50px;
    place-items: center;
    padding: 10px 20px;

    li {
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.title};
    }
  }
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;

  input {
    width: 300px;
    height: 36px;
    background: ${(props) => props.theme.colors.inputBackground} 0% 0% no-repeat
      padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    position: relative;
    padding-left: 35px;
    color: ${(props) => props.theme.colors.text};

    ::placeholder {
      color: #999999;
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 4px 0 ${(props) => props.theme.colors.primary};
    }
  }

  a {
    display: flex;
    place-items: center;
    justify-content: space-evenly;
    background: ${(props) => props.theme.colors.primary};
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: 700;
    font-size: 14px;
    padding: 0 5px;
    width: 142px;
    height: 36px;

    &:hover {
      background: ${(props) => darken(0.04, props.theme.colors.primary)};
    }
  }
`;

export const IconSearch = styled(MdSearch)`
  position: absolute;
  z-index: 1;
  margin-top: 8px;
  margin-left: 10px;
  color: #999999;
`;

export const Courier = styled.div`
  display: flex;
  justify-content: space-around;
  place-items: center;

  img {
    margin-right: 5px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
  }

  span {
    margin-right: 5px;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: ${(props) => lighten(0.46, props.theme.colors.primary)};
    display: flex;
    place-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${(props) => lighten(0.04, props.theme.colors.primary)};
  }
`;

export const DeliveryList = styled.div`
  width: 100%;
  margin-top: 10px;

  li {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 50px;
    place-items: center;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.cardBackground};

    border-radius: 4px;
    margin-bottom: 20px;
    height: 57px;
  }

  p {
    font-size: 16px;
    color: ${(props) => props.theme.colors.text};
  }

  button {
    display: flex;
    place-items: center;
    background: none;
    border: none;
    color: ${(props) => props.theme.colors.text};
    padding: 0 5px;
    height: 36px;
  }
`;

export const Status = styled.div<ColorProps>`
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  width: 99px;
  height: 25px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 12px;

  ${(props) => color[props.color || 'Pendente']};

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${(props) => background[props.color || 'Pendente']};
  }
`;
