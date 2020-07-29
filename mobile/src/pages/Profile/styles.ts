import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 20 : 40}px;
  position: relative;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderColor = styled.View`
  height: 40px;
  background: ${(props) => props.theme.colors.header};
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
`;

export const ThemeContainer = styled.View`
  flex-direction: row;
`;

export const ThemeText = styled.Text`
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  margin: 24px 0;
  align-self: flex-start;
`;
