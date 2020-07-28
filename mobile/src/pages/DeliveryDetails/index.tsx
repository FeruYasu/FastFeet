import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { useRoute, useNavigation } from '@react-navigation/native';
import {
  Container,
  DeliveryInfo,
  HeaderColor,
  TitleContainer,
  Title,
  InfoLabel,
  Info,
  StatusInfo,
  DateContainer,
  Date,
  ButtonsContainer,
  Button,
  Buttontext,
  Border,
} from './styles';

interface RouteParams {
  data: {
    start_date: string;
    end_date: string;
    product: string;
    created_at: string;
    recipient: {
      city: string;
      name: string;
      zipcode: string;
      state: string;
      number: number;
      street: string;
    };
  };
}

interface NavigationParams {
  text: string;
}

const DeliveryDetails: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as RouteParams;
  const [status, setStatus] = useState('Pendente');
  const [startDate, setStartDate] = useState('--/--/--');
  const [endDate, setEndDate] = useState('--/--/--');
  const [createdAt, setCreatedAt] = useState('--/--/--');

  useEffect(() => {
    if (data.start_date) {
      const formatDate = format(parseISO(data.start_date), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
      setStartDate(formatDate);
      setStatus('Retirada');
    }
    if (data.end_date) {
      const formatDate = format(parseISO(data.end_date), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
      setEndDate(formatDate);
      setStatus('Entregue');
    }

    if (data.created_at) {
      const formatDate = format(parseISO(data.created_at), "dd'/'MM'/'yyyy", {
        locale: pt,
      });
      setCreatedAt(formatDate);
    }
  }, [data]);

  return (
    <Container>
      <HeaderColor />
      <DeliveryInfo>
        <TitleContainer>
          <Icon name="local-shipping" size={30} color="#ffbd42" />
          <Title>Informações da entrega</Title>
        </TitleContainer>
        <InfoLabel>DESTINATÁRIO</InfoLabel>
        <Info>{data.recipient.name}</Info>
        <InfoLabel>ENDEREÇO DE ENTREGA</InfoLabel>
        <Info>
          {data.recipient.street}, {data.recipient.number},{' '}
          {data.recipient.city} - {data.recipient.state},{' '}
          {data.recipient.zipcode}
        </Info>
        <InfoLabel>PRODUTO</InfoLabel>
        <Info>{data.product}</Info>
      </DeliveryInfo>
      <StatusInfo>
        <TitleContainer>
          <Icon name="event" size={30} color="#ffbd42" />
          <Title>Situação da entrega</Title>
        </TitleContainer>
        <DateContainer>
          <Date>
            <InfoLabel>STATUS</InfoLabel>
            <Info>{status}</Info>
          </Date>
          <Date>
            <InfoLabel>CRIADO EM</InfoLabel>
            <Info>{createdAt}</Info>
          </Date>
        </DateContainer>
        <DateContainer>
          <Date>
            <InfoLabel>DATA DE RETIRADA</InfoLabel>
            <Info>{startDate}</Info>
          </Date>
          <Date>
            <InfoLabel>DATA DE ENTREGA</InfoLabel>
            <Info>{endDate}</Info>
          </Date>
        </DateContainer>
      </StatusInfo>

      <ButtonsContainer>
        <Button
          onPress={() => {
            navigation.navigate('InformProblem', { data });
          }}
        >
          <Icon name="cancel" size={30} color="#E74040" />
          <Buttontext>Informar Problema</Buttontext>
        </Button>
        <Border />
        <Button
          onPress={() => {
            navigation.navigate('ProblemList', { data });
          }}
        >
          <Icon name="info" size={30} color="#E7BA40" />
          <Buttontext>Visualizar Problema</Buttontext>
        </Button>
        <Border />
        <Button
          onPress={() => {
            navigation.navigate('ConfirmDelivery', { data });
          }}
        >
          <Icon name="check-circle" size={30} color="#7D40E7" />
          <Buttontext>Confirmar Entrega</Buttontext>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default DeliveryDetails;
