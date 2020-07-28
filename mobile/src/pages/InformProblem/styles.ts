import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const HeaderColor = styled.View`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 15px;
  margin-top: -60px;
`;

export const FormInput = styled.TextInput`
  padding: 15px;
  height: 300px;
  background: #fff;
  border-radius: 4px;
  border: #0000001a;
  font-size: 16px;
  text-align-vertical: top;
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  margin-top: 20px;
`;
