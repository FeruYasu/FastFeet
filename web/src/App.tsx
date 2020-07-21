import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import AppProvider from './hooks';

import GlobalStyle from './styles/global';
import Theme from './styles/themes/theme';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <AppProvider>
          <Theme>
            <Routes />
            <GlobalStyle />
          </Theme>
        </AppProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
