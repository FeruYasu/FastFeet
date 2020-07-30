import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  HeaderColor,
  Form,
  FormInput,
  SubmitButton,
} from './styles';

interface RouteParams {
  data: {
    id: number;
  };
}

const InformProblem: React.FC = () => {
  const [problem, setProblem] = useState('');
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as RouteParams;
  const { theme } = useAuth();

  async function handleSubmit(): Promise<void> {
    if (problem) {
      await api.post(`/deliveryproblems`, {
        delivery_id: data.id,
        description: problem,
      });
    }

    navigation.navigate('Dashboard');
  }

  return (
    <Container>
      <HeaderColor />
      <Form>
        <FormInput
          keyboardType="default"
          returnKeyType="done"
          multiline
          numberOfLines={4}
          placeholder="Inclua aqui o problema que ocorreu na entrega."
          placeholderTextColor={theme.colors.inputPlaceholder}
          value={problem}
          onChangeText={setProblem}
          blurOnSubmit
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>Enviar</SubmitButton>
      </Form>
    </Container>
  );
};

export default InformProblem;
