import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import Delivery from '../../components/Delivery';

import {
  Container,
  Header,
  Top,
  ProfileImage,
  ProfileText,
  Text,
  Input,
  NameContainer,
  TitleContainer,
  Title,
  CityContainer,
  City,
  DeliveryList,
  ButtonsContainer,
  Button,
  ButtonText,
} from './styles';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  const [statusPendente, setStatusPendente] = useState(true);
  const [deliveries, setDeliveries] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function loadDeliveries(): Promise<void> {
      const response = await api.get(`/couriers/1/deliveries`);
      console.log(response.data);

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, []);

  async function handlelistPendent(): Promise<void> {
    setStatusPendente(!statusPendente);
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
    setStatusPendente(!statusPendente);
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
        <Top>
          {user.avatar_url ? (
            <ProfileImage source={{ uri: user.avatar_url }} />
          ) : (
            <ProfileText>user.name</ProfileText>
          )}

          <NameContainer>
            <Text>Bem vindo de volta,</Text>
            <Text>{user.name}</Text>
          </NameContainer>

          <Icon
            onPress={handleLogout}
            name="exit-to-app"
            size={30}
            color="#ffbd42"
          />
        </Top>

        <TitleContainer>
          <Title>Entregas</Title>
          <CityContainer>
            <Icon name="place" size={22} color="#ffbd42" />
            <City>{deliveries[0]?.recipient.city}</City>
          </CityContainer>
        </TitleContainer>
      </Header>

      <Input value={filter} placeholder="Filtrar por bairro" />

      <DeliveryList
        data={deliveries}
        navigation={navigation}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Delivery data={item} />}
      />

      <ButtonsContainer>
        <Button onPress={handlelistPendent} status={statusPendente}>
          <ButtonText status={statusPendente}>Pendentes</ButtonText>
        </Button>
        <Button onPress={handleListDelivered} status={!statusPendente}>
          <ButtonText status={!statusPendente}>Entregues</ButtonText>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

export default Dashboard;
