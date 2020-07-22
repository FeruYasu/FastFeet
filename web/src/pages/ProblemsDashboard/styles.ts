import styled from 'styled-components';
import { darken, lighten } from 'polished';
import { MdSearch } from 'react-icons/md';

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
    grid-template-columns: 150px 1fr 50px;
    place-items: left;
    padding: 10px 20px;

    li {
      font-size: 16px;
      font-weight: bold;
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

export const Courier = styled.div`
  display: flex;
  justify-content: space-between;
  place-items: center;

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

export const ProblemList = styled.div`
  width: 100%;
  margin-top: 10px;

  li {
    display: grid;
    grid-template-columns: 150px 1fr 50px;
    place-items: left;
    padding: 10px 20px;
    background: #fff;
    border-radius: 4px;
    margin-bottom: 20px;
    height: 57px;

    p:first-child {
      justify-self: center;
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
    color: #c6c6c6;
    padding: 0 5px;
    height: 36px;
  }
`;
