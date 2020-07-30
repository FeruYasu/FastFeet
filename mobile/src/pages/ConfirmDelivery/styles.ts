import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const HeaderColor = styled.View`
  height: 60px;
  background: ${(props) => props.theme.colors.header};
`;

export const ConfirmDeliveryContainer = styled.View`
  margin: 15px;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const PhotoButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  margin-top: -80px;
`;

export const ConfirmButton = styled(Button)`
  align-items: center;
  margin-top: 40px;
  width: 90%;
  height: 60px;
`;

export const SignaturePhoto = styled.Image`
  margin-top: -50px;
  width: 90%;
  height: 100%;
  max-width: 400px;
  max-height: 500px;
`;

export const ExplanationText = styled.Text`
  margin-top: 40px;
  font-size: 12px;
  text-align: center;
  flex: 1;
  color: ${(props) => props.theme.colors.text};
  max-width: 200px;
`;

export const ModalContainer = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const ModalContent = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImageIcon = styled.Image`
  width: 20%;
  height: 15%;
`;

export const ModalText = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.text};
`;

export const ModalSubText = styled.Text`
  color: ${(props) => props.theme.colors.text};
`;
