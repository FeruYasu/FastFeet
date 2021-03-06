import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Theme from './styles/themes/theme';
import themes from './styles/themes';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <NavigationContainer theme={themes.light}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#36229c"
        translucent
      />
      <AppProvider>
        <Theme>
          <View style={{ flex: 1, backgroundColor: '#312E38' }}>
            <Routes />
          </View>
        </Theme>
      </AppProvider>
    </NavigationContainer>
  );
};

export default App;
