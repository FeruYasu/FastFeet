import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { useAuth } from '../../hooks/auth';

const Theme: React.FC = ({ children }) => {
  const { theme } = useAuth();

  useEffect(() => {
    theme;
  }, [theme]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
