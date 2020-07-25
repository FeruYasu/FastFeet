import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

interface Status {
  color: boolean;
}

export const Container = styled.View`
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.productTitle};
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export const StatusContainer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 20px;
  align-items: center;
`;

export const CircleDone = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${(props) => props.theme.colors.progress};
`;
export const CircleOpen = styled.View`
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  border: solid 1px ${(props) => props.theme.colors.progress};
  background-color: #fff;
`;

export const Line = styled.View<Status>`
  width: 142px;
  height: 2px;
  border: solid 1px ${(props) => props.theme.colors.subtitle};

  ${(props) =>
    props.color &&
    css`
      border: solid 1px ${props.theme.colors.progress};
    `}
`;

export const StatusLabel = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 0px;
  padding-right: 0px;
  padding-left: 10px;
  align-items: center;
`;

export const Label = styled.Text<Status>`
  width: 80px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.subtitle};

  ${(props) =>
    props.color &&
    css`
      color: ${props.theme.colors.progress};
    `}
`;

export const DetailsContainer = styled.View`
  background: #fef3d5;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 12px;
  align-items: flex-end;
  padding: 12px 15px;
`;

export const DetailsButton = styled(TouchableOpacity)``;

export const DetailsButtonText = styled.Text`
  color: ${(props) => props.theme.colors.primary};
  font-weight: bold;
  font-size: 18px;
`;
