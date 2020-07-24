import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Theme from './styles/themes/theme';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" translucent />
    <AppProvider>
      <Theme>
        <View style={{ flex: 1, backgroundColor: '#312E38' }}>
          <Routes />
        </View>
      </Theme>
    </AppProvider>
  </NavigationContainer>
);

export default App;
