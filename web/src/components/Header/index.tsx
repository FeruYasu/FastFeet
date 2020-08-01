import React, { useCallback, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logoFF.png';
import theme from '../../styles/themes';

import { Container, Content, Profile, Name } from './styles';
import { useAuth } from '../../hooks/Auth';
import Switch from '../Switch';

const Header: React.FC = () => {
  const { signOut, themeContext, setTheme } = useAuth();
  const [checkTheme, setCheckTheme] = useState(false);

  useEffect(() => {
    if (themeContext === theme.light) {
      setCheckTheme(false);
    } else {
      setCheckTheme(true);
    }
  }, [themeContext]);

  const handleLogout = useCallback(() => {
    signOut();
  }, [signOut]);

  const handleToggleTheme = useCallback(() => {
    if (checkTheme === true) {
      setCheckTheme(false);
      setTheme(theme.light);
    } else {
      setCheckTheme(true);
      setTheme(theme.dark);
    }
  }, [checkTheme, setTheme]);

  return (
    <Container>
      <Content>
        <nav>
          <div>
            <img src={logo} alt="Logo da Fastfeet" />
            <h1>
              <strong>FAST</strong>FEET
            </h1>
          </div>
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
          <Switch
            id="themeswitch"
            onChange={handleToggleTheme}
            checked={checkTheme}
          />
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
