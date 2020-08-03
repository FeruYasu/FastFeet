import styled from 'styled-components/native';

import { Form } from '@unform/mobile';
import { ImageBackground } from 'react-native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: space-evenly;
`;

export const TopContainer = styled.View`
  display: flex;
  height: 40%;
  width: 100%;
  justify-content: center;
  padding: 0 30px;
  position: relative;
`;

export const BackgroundImage = styled.Image`
  margin-left: -150px;
  position: absolute;
`;

export const LogoContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 50px;
`;

export const LogoIcon = styled.Image`
  margin-top: -15px;
`;

export const TextContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FormContainer = styled(Form)`
  margin-top: 20px;
  padding: 10px 20px;
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
  margin: auto;
`;

export const FormInput = styled.TextInput`
  padding: 0 15px;
  height: 46px;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const SubmitButton = styled(Button)``;
