import React from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TitleContainer,
  Title,
  StatusContainer,
  CircleDone,
  CircleOpen,
  Line,
  StatusLabel,
  Label,
  DetailsContainer,
  ContentContainer,
  DetailsLabel,
  Content,
  DetailsButton,
  DetailsButtonText,
} from './styles';

interface DeliveryData {
  data: {
    start_date: string;
    end_date: string;
    product: string;
    Recipient: {
      city: string;
    };
  };
}

const Delivery: React.FC<DeliveryData> = ({ data }) => {
  let startDate = '--/--/--';

  const navigation = useNavigation();

  if (data.start_date) {
    startDate = format(parseISO(data.start_date), "dd'/'MM'/'yyyy", {
      locale: pt,
    });
  }

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" size={30} color="#7D40E7" />
        <Title>{data.product}</Title>
      </TitleContainer>
      <StatusContainer>
        <CircleDone />
        <Line />
        {data.start_date ? <CircleDone /> : <CircleOpen />}
        <Line />
        {data.end_date ? <CircleDone /> : <CircleOpen />}
      </StatusContainer>
      <StatusLabel>
        <Label>Aguardando Retirada</Label>
        <Label>Retirada</Label>
        <Label>Entregue</Label>
      </StatusLabel>
      <DetailsContainer>
        <ContentContainer>
          <DetailsLabel>Data</DetailsLabel>
          <Content>{startDate}</Content>
        </ContentContainer>
        <ContentContainer>
          <DetailsLabel>Cidade</DetailsLabel>
          <Content>{data.Recipient.city}</Content>
        </ContentContainer>
        <DetailsButton
          onPress={() => {
            navigation.navigate('DeliveryDetails', { data });
          }}
        >
          <DetailsButtonText>Ver detalhes</DetailsButtonText>
        </DetailsButton>
      </DetailsContainer>
    </Container>
  );
};

export default Delivery;
