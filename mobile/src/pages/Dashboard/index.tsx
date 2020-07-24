import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import Delivery from '../../components/Delivery';

import {
  Container,
  Header,
  ProfileImage,
  Text,
  NameContainer,
  Name,
  TitleContainer,
  Title,
  ButtonsContainer,
  PendingButton,
  PendingButtonText,
  DeliveredButton,
  DeliveredButtonText,
  DeliveryList,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries(): Promise<void> {
      const response = await api.get(`/couriers/1/deliveries`);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  async function handlelistPendent(): Promise<void> {
    const { data } = await api.get(`/couriers/1/deliveries`);
    const newList = data.filter((delivery) => {
      if (delivery.start_date === null) {
        return delivery;
      }
      return delivery;
    });

    setDeliveries(newList);
  }

  async function handleListDelivered(): Promise<void> {
    const { data } = await api.get(`/couriers/1/deliveries`);
    const newList = data.filter((delivery) => {
      if (delivery.end_date !== null) {
        return delivery;
      }
      return delivery;
    });

    setDeliveries(newList);
  }
  async function handleLogout(): Promise<void> {
    signOut();
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <Header>
        <ProfileImage>GA</ProfileImage>
        <NameContainer>
          <Text>Bem vindo de volta,</Text>
          <Name>courier.name</Name>
        </NameContainer>

        <Icon
          onPress={handleLogout}
          name="exit-to-app"
          size={30}
          color="#E74040"
        />
      </Header>

      <TitleContainer>
        <Title>Entregas</Title>

        <ButtonsContainer>
          <PendingButton onPress={handlelistPendent}>
            <PendingButtonText>Pendentes</PendingButtonText>
          </PendingButton>
          <DeliveredButton onPress={handleListDelivered}>
            <DeliveredButtonText>Entregues</DeliveredButtonText>
          </DeliveredButton>
        </ButtonsContainer>
      </TitleContainer>

      <DeliveryList
        data={deliveries}
        navigation={navigation}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Delivery data={item} />}
      />
    </Container>
  );
};

export default Dashboard;
