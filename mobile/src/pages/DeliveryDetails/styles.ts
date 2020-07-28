import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const HeaderColor = styled.View`
  height: 80px;
  background: ${(props) => props.theme.colors.primary};
`;

export const DeliveryInfo = styled.View`
  border: #0000001a;
  border-radius: 4px;
  margin: 20px;
  padding: 10px;
  margin-top: -50px;
  background: #fff;
  margin-bottom: 0px;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 1.41px;
  elevation: 10;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.text};
  margin-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const InfoLabel = styled.Text`
  font-weight: bold;
  color: ${(props) => props.theme.colors.text};
  font-size: 12px;
  margin-bottom: 8px;
`;

export const Info = styled.Text`
  font-size: 16px;
  margin-bottom: 10px;
  color: #777;
`;

export const StatusInfo = styled.View`
  border: #0000001a;
  border-radius: 4px;
  margin: 8px 20px;
  padding: 10px;
  background: #fff;
  shadow-color: #000;
  shadow-opacity: 0.2;
  shadow-radius: 1.41px;
  elevation: 10;
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled.View``;

export const ButtonsContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  border: #0000001a;
  padding: 10px;
  flex-direction: row;
  background: #fff;
  justify-content: space-evenly;
`;

export const Button = styled(TouchableOpacity)`
  align-items: center;
`;

export const Buttontext = styled.Text`
  color: #999999;
  font-size: 12px;
  width: 60px;
  text-align: center;
`;

export const Border = styled.View`
  height: 100%;
  border: 1px solid #eee;
`;
