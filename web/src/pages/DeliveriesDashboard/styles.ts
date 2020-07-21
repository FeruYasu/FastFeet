import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { MdSearch } from 'react-icons/md';

const color = {
  Entregue: css`
    color: #2ca42b;
    background: #dff0df;
  `,
  Cancelado: css`
    color: #de3b3b;
    background: #fab0b0;
  `,
  Retirado: css`
    color: #4d85ee;
    background: #bad2ff;
  `,
  Pendente: css`
    color: #c1bc35;
    background: #f0f0df;
  `,
};

const background = {
  Entregue: css`
    background-color: #2ca42b;
  `,
  Cancelado: css`
    background-color: #de3b3b;
  `,
  Retirado: css`
    background-color: #4d85ee;
  `,
  Pendente: css`
    background-color: #c1bc35;
  `,
};

export const Container = styled.div`
  background: #f5f5f5;
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
  }

  ul {
    display: grid;
    grid-template-columns: 50px 1fr 1fr 1fr 1fr 1fr 50px;
    place-items: center;
    padding: 10px 20px;

    li {
      font-size: 16px;
      font-weight: bold;
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
    background: #ffffff 0% 0% no-repeat padding-box;
    border: 1px solid #dddddd;
    border-radius: 4px;
    position: relative;
    padding-left: 35px;

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
    background: #f4effc;
    display: flex;
    place-items: center;
    justify-content: center;
    font-size: 16px;
    color: ${darken(0.2, '#a28fd0')};
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
    background: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    height: 57px;
  }

  p {
    font-size: 16px;
    color: #666666;
  }

  button {
    display: flex;
    place-items: center;
    background: none;
    border: none;
    color: #c6c6c6;
    padding: 0 5px;
    height: 36px;
  }
`;

export const Status = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-evenly;
  width: 99px;
  height: 25px;
  font-weight: 700;
  font-size: 14px;
  border-radius: 12px;
  ${() => color.Entregue};

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    ${() => background.Entregue};
  }
`;
