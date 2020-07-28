import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StackNavigationOptions } from '@react-navigation/stack';

import { useTheme, useNavigation } from '@react-navigation/native';
import Dashboard from '../pages/Dashboard';
import DeliveryDetails from '../pages/DeliveryDetails';
import InformProblem from '../pages/InformProblem';

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
    </App.Navigator>
  );
};

export default AppRoutes;
