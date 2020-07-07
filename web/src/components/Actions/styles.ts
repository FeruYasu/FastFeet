import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const ActionsPanel = styled.div`
  position: absolute;
  width: 150px;
  box-shadow: 0px 0px 2px #00000026;
  background: #fff;
  left: calc(50% - 75px);
  top: 20px;
  border-radius: 8px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 5px);
    top: -5px;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #fff;
  }
`;

export const ActionList = styled.div`
  hr {
    margin: 0 10px;
    color: #eeeeee;
    background-color: #eeeeee;
    height: 1px;
    border: none;
  }

  a {
    display: flex;
    width: 130px;
    display: flex;
    justify-content: left;
    height: 36px;
    place-items: center;
    margin-left: 5px;

    p {
      color: #999999;
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;

export const Action = styled.div`
  display: flex;
  width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    p {
      color: #999999;
      font-size: 16px;
      margin-left: 10px;
    }
  }
`;
