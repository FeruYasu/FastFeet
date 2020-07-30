import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const HeaderColor = styled.View`
  height: 80px;
  background: ${(props) => props.theme.colors.header};
`;

export const Form = styled.View`
  align-self: stretch;
  margin: 15px;
  margin-top: -60px;
`;

export const FormInput = styled.TextInput`
  padding: 15px;
  height: 300px;
  background: ${(props) => props.theme.colors.cardBackground};
  border-radius: 4px;
  border: #0000001a;
  font-size: 16px;
  text-align-vertical: top;
  color: ${(props) => props.theme.colors.text};
`;

export const SubmitButton = styled(Button)`
  align-items: center;
  margin-top: 20px;
`;
