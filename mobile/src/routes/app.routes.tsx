import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useTheme } from '@react-navigation/native';
import Dashboard from '../pages/Dashboard';
import DeliveryDetails from '../pages/DeliveryDetails';
import InformProblem from '../pages/InformProblem';
import ProblemList from '../pages/ProblemList';
import ConfirmDelivery from '../pages/ConfirmDelivery';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { colors } = useTheme();

  return (
    <App.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.primary },
      }}
    >
      <App.Screen name="Dashboard" component={Dashboard} />
      <App.Screen
        name="DeliveryDetails"
        component={DeliveryDetails}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Detalhes',
          headerTintColor: '#fff',
          headerTitleStyle: { marginTop: 40, fontSize: 22 },
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />

      <App.Screen
        name="InformProblem"
        component={InformProblem}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Informar um problema',
          headerTintColor: '#fff',
          headerTitleStyle: { marginTop: 40, fontSize: 22 },
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />

      <App.Screen
        name="ProblemList"
        component={ProblemList}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Problemas da entrega',
          headerTintColor: '#fff',
          headerTitleStyle: { marginTop: 40, fontSize: 22 },
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />

      <App.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Confirmar',
          headerTintColor: '#fff',
          headerTitleStyle: { marginTop: 40, fontSize: 24 },
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DeliveryDetails');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />

      <App.Screen
        name="Profile"
        component={Profile}
        options={({ navigation }) => ({
          headerShown: true,
          title: 'Perfil',
          headerTintColor: '#fff',
          headerTitleStyle: { marginTop: 40, fontSize: 22 },
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleAlign: 'center',
          headerLeftContainerStyle: {
            marginLeft: 20,
            marginTop: 40,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Dashboard');
              }}
            >
              <Icon name="chevron-left" size={20} color="#FFF" />
            </TouchableOpacity>
          ),
        })}
      />
    </App.Navigator>
  );
};

export default AppRoutes;
