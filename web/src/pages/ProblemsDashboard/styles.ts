import styled from 'styled-components';
import { lighten } from 'polished';
import { MdSearch } from 'react-icons/md';

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
    grid-template-columns: 150px 1fr 50px;
    place-items: left;
    padding: 10px 20px;

    li {
      font-size: 16px;
      font-weight: bold;
      color: ${(props) => props.theme.colors.title};
    }

    li:first-child {
      justify-self: center;
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

export const ProblemList = styled.div`
  width: 100%;
  margin-top: 10px;

  li {
    display: grid;
    grid-template-columns: 150px 1fr 50px;
    place-items: left;
    padding: 10px 20px;
    background: ${(props) => props.theme.colors.cardBackground};
    border-radius: 4px;
    margin-bottom: 20px;
    height: 57px;
    place-items: center;

    p:nth-child(2) {
      justify-self: flex-start;
      color: ${(props) => props.theme.colors.text};
    }
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
    color: ${(props) => props.theme.colors.text};
    padding: 0 5px;
    height: 36px;
  }
`;
