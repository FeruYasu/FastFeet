import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import { DefaultTheme } from 'styled-components';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';

import themes from '../styles/themes';

interface Courier {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  courier: Courier;
}

interface SignInCredentials {
  id: number;
}

interface AuthContextData {
  user: Courier;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  theme: DefaultTheme;
  setTheme(theme: DefaultTheme): void;
  updateUser(courier: Courier): Promise<void>;
  changeTheme(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<DefaultTheme>(themes.light);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@FastFeet:token',
        '@FastFeet:user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers.authorization = `Bearer ${token[1]}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const updateUser = useCallback(
    async (courier: Courier) => {
      await AsyncStorage.setItem('@FastFeet:user', JSON.stringify(courier));

      setData({
        token: data.token,
        courier,
      });
    },
    [setData, data.token]
  );

  const signIn = useCallback(async ({ id }) => {
    const response = await api.post('/couriersessions', {
      id,
    });

    const { token, courier } = response.data;

    await AsyncStorage.multiSet([
      ['@FastFeet:token', token],
      ['@FastFeet:user', JSON.stringify(courier)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, courier });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@FastFeet:token', '@FastFeet:courier']);

    setData({} as AuthState);
  }, []);

  const changeTheme = useCallback(() => {
    AsyncStorage.setItem('@FastFeet:theme', JSON.stringify(theme));

    if (theme.title === 'dark') {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  }, [theme]);

  return (
    <AuthContext.Provider
      value={{
        user: data.courier,
        loading,
        signIn,
        signOut,
        updateUser,
        theme,
        setTheme,
        changeTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
