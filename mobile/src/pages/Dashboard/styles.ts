import styled from 'styled-components/native';
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: column;
  width: 100%;
  padding: 60px 20px 20px;
  background: ${(props) => props.theme.colors.primary};
`;

export const Top = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-bottom: 30px;
  margin-top: 10px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
  color: ${(props) => props.theme.colors.title};
`;

export const CityContainer = styled.View`
  flex-direction: row;
`;

export const City = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.subtitle};
  margin-left: 5px;
`;

export const ProfileImage = styled.Text`
  font-size: 32px;
  background: #f4effc;
  color: #a28fd0;
  height: 68px;
  width: 68px;
  border-radius: 34px;
  display: flex;
  text-align: center;
  padding-top: 10px;
  margin-right: 20px;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.subtitle};
`;

export const NameContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const Input = styled(TextInput)`
  margin: -30px 20px 0 20px;
  border-radius: 6px;
  padding-left: 20px;
  background: #fff;
  height: 60px;
  border: 1px solid ${(props) => props.theme.colors.subtitle};
  box-shadow: 0px 2px 3.84px #000;
  shadow-opacity: 0.25;
  elevation: 10;
`;

export const DeliveryList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerSTyle: { padding: 30 },
})`
  margin: 10px 20px;
`;

export const LogoutButton = styled.Button``;
