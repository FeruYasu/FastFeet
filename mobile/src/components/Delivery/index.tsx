import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { useAuth } from '../../hooks/auth';

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
  DetailsButton,
  DetailsButtonText,
} from './styles';

interface DeliveryData {
  data: {
    start_date: string;
    end_date: string;
    product: string;
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

const Delivery: React.FC<DeliveryData> = ({ data }) => {
  const { theme } = useAuth();
  const [statusRetirado, setStatusRetirado] = useState(false);
  const [statusEntregue, setStatusEntregue] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (data.start_date) {
      setStatusRetirado(true);
    }

    if (data.end_date) {
      setStatusEntregue(true);
    }
  }, [data.start_date, data.end_date]);

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" size={30} color={theme.colors.cardIcon} />
        <Title>{data.product}</Title>
      </TitleContainer>
      <StatusContainer>
        <CircleDone />
        <Line color={statusRetirado} />
        {statusRetirado ? <CircleDone /> : <CircleOpen />}
        <Line color={statusEntregue} />
        {statusEntregue ? <CircleDone /> : <CircleOpen />}
      </StatusContainer>
      <StatusLabel>
        <Label color>AGUARDANDO</Label>
        <Label color={statusRetirado}>RETIRADO</Label>
        <Label color={statusEntregue}>ENTREGUE</Label>
      </StatusLabel>
      <DetailsButton
        onPress={() => {
          navigation.navigate('DeliveryDetails', { data });
        }}
      >
        <DetailsButtonText>Detalhes</DetailsButtonText>
        <Icon name="arrow-forward" size={26} color={theme.colors.buttonText} />
      </DetailsButton>
    </Container>
  );
};

export default Delivery;
