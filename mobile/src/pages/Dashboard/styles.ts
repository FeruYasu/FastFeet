import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #fff;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  font-size: 12px;
  color: #666666;
`;

export const NameContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Name = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  margin-top: 30px;
  align-items: flex-end;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
`;

export const PendingButton = styled(TouchableOpacity)`
  margin-right: 10px;
`;

export const PendingButtonText = styled.Text`
  color: #7d40e7;
`;

export const DeliveredButton = styled(TouchableOpacity)``;

export const DeliveredButtonText = styled.Text``;

export const DeliveryList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
  contentContainerSTyle: { padding: 30 },
})`
  margin-top: 10px;
`;

export const LogoutButton = styled.Button``;
