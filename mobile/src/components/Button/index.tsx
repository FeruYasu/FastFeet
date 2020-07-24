import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

const Button: React.FC = ({ children, loading, ...rest }) => {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
};

export default Button;
