import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.header};
  padding: 0 30px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
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
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .main-nav-active {
    color: ${(props) => props.theme.colors.title};
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
  color: ${(props) => props.theme.colors.text};
`;
