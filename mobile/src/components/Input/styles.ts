import styled, { css } from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: ${(props) => props.theme.colors.inputBackground};
  border-radius: 4px;
  margin-bottom: 8px;
  border-width: 0.5px;
  border-color: #232129;

  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #ff9000;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(FontAwesome5)`
  margin-right: 16px;
`;

export const Border = styled.View`
  border-right-width: 1px;
  border-color: ${(props) => props.theme.colors.inputPlaceholder};
  height: 20px;
  margin-right: 5px;
`;
