import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo.png';

import { Container, Content, Profile, Name } from './styles';

const Header: React.FC = () => {
  const handleLogout = useCallback(() => {
    console.log('oi');
  }, []);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Logo da Fastfeet" />
          <NavLink to="/deliveries" activeClassName="main-nav-active">
            ENCOMENDAS
          </NavLink>
          <NavLink to="/couriers" activeClassName="main-nav-active">
            ENTREGADORES
          </NavLink>
          <NavLink to="/recipients" activeClassName="main-nav-active">
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/problems" activeClassName="main-nav-active">
            PROBLEMAS
          </NavLink>
        </nav>

        <aside>
          <Profile>
            <div>
              <Name>Admin FastFeet</Name>
              <button type="button" onClick={handleLogout}>
                sair do sistema
              </button>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
