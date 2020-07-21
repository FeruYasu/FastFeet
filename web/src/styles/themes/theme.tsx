import React from 'react';
import { ThemeProvider } from 'styled-components';

// import dark from './dark';
import light from './light';

const Theme: React.FC = ({ children }) => {
  return <ThemeProvider theme={light}>{children}</ThemeProvider>;
};

export default Theme;
