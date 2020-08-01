import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useAuth } from '../../hooks/Auth';

const Theme: React.FC = ({ children }) => {
  const { themeContext } = useAuth();

  return <ThemeProvider theme={themeContext}>{children}</ThemeProvider>;
};

export default Theme;
