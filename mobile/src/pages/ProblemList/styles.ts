import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${(props) => props.theme.colors.background};
`;

export const HeaderColor = styled.View`
  height: 40px;
  background: ${(props) => props.theme.colors.header};
`;

export const Title = styled.Text`
  margin-top: -60px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

export const ProblemListContainer = styled.FlatList`
  margin: 15px;
`;

export const Problem = styled.View`
  flex-direction: row;
  background: ${(props) => props.theme.colors.cardBackground};
  padding: 15px;
  justify-content: space-between;
  border-radius: 4px;
  border: #0000001a;
  margin-bottom: 10px;
  align-items: center;
`;

export const Description = styled.Text`
  color: #999999;
  font-size: 16px;
  max-width: 200px;
`;

export const Date = styled.Text`
  color: #c1c1c1;
  font-size: 14px;
`;
