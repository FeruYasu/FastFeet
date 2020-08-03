import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1065px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  background: ${(props) => props.theme.colors.header};
  opacity: 1;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 450px;
  border-radius: 4px;
  padding: 20px;

  p,
  h4 {
    font-size: 14px;
    margin-bottom: 10px;
  }

  h4 {
    color: ${(props) => props.theme.colors.title};
  }

  img {
    max-width: 230px;
    max-height: 250px;
    width: auto;
    height: auto;
    margin: auto;
  }

  hr {
    background-color: #eeeeee;
    height: 1px;
    border: none;
    margin-bottom: 10px;
  }
`;
