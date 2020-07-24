import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  border: #0000001a;
  border-radius: 4px;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  margin-left: 10px;
  font-weight: bold;
  font-size: 14px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 50px;
  align-items: center;
`;

export const CircleDone = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: #7d40e7;
`;
export const CircleOpen = styled.View`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: solid 1px #7d40e7;
  background-color: #fff;
`;

export const Line = styled.View`
  width: 120px;
  height: 2px;
  border: solid 1px #7d40e7;
  background-color: #fff;
`;

export const StatusLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
  padding: 0 18px;
  align-items: center;
`;

export const Label = styled.Text`
  width: 80px;
  text-align: center;
  color: #999999;
  font-size: 10px;
`;

export const DetailsContainer = styled.View`
  background: #f8f9fd;
  flex-direction: row;
  margin-top: 10px;
  align-items: flex-end;
  padding: 20px 15px;
`;

export const ContentContainer = styled.View`
  flex: 1;
`;

export const DetailsLabel = styled.Text`
  color: #999999;
  font-size: 8px;
`;

export const Content = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-top: 5px;
`;

export const DetailsButton = styled(TouchableOpacity)``;

export const DetailsButtonText = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  font-size: 12px;
`;
