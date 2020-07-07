import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: 1px solid #dddddd;
`;

export const Content = styled.div`
  height: 64px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 2px solid #eee;
      height: 26px;
    }

    a {
      font-weight: bold;
      color: #999999;
      margin-right: 20px;
      font-size: 15px;
      font-weight: 700;

      &:not(.main-nav-active):hover {
        color: #7d40e7;
      }
    }
  }

  .main-nav-active {
    color: #000;
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }

    button {
      display: block;
      margin-top: 2px;
      font-size: 14px;
      color: #de3b3b;
      font-weight: 400;
      background: none;
      border: none;
    }
  }

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 700;
`;
