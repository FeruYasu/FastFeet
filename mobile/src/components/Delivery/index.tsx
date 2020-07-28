import React, { useState } from 'react';
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
  const [statusRetirado, setStatusRetirado] = useState(false);
  const [statusEntregue, setStatusEntregue] = useState(false);

  const navigation = useNavigation();

  if (data.start_date) {
    setStatusRetirado(true);
  }

  if (data.end_date) {
    setStatusEntregue(true);
  }

  return (
    <Container>
      <TitleContainer>
        <Icon name="local-shipping" size={30} color="#7D40E7" />
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
      <DetailsContainer>
        <DetailsButton
          onPress={() => {
            navigation.navigate('DeliveryDetails', { data });
          }}
        >
          <DetailsButtonText>Detalhes</DetailsButtonText>
        </DetailsButton>
        <Icon name="arrow-forward" size={26} color="#4a31cd" />
      </DetailsContainer>
    </Container>
  );
};

export default Delivery;
