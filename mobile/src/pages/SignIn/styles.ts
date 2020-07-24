import styled from 'styled-components/native';

import { ImageBackground } from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const BackgroundImage = styled(ImageBackground)`
  display: flex;
  height: 40%;
  width: 100%;
  justify-content: center;
  padding: 0 30px;
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const TextContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const YellowText = styled.Text`
  font-size: 46px;
  color: ${(props) => props.theme.colors.accent};
  font-family: 'Roboto-BoldItalic';
`;

export const Text = styled.Text`
  font-size: 46px;
  color: #fff;
  font-family: 'Roboto-BoldItalic';
  line-height: 50px;
`;

export const SmallText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-family: 'Roboto-Light';
  line-height: 26px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Form = styled.View`
  margin-top: 50px;
  align-self: stretch;
  padding: 0 30px;
`;

export const FormInput = styled.TextInput`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)``;
