import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  HeaderColor,
  ProblemListContainer,
  Problem,
  Description,
  Date,
} from './styles';

interface RouteParams {
  data: {
    id: number;
  };
}

const ProblemList: React.FC = () => {
  const [problem, setProblem] = useState('');
  const route = useRoute();
  const { data } = route.params as RouteParams;

  useEffect(() => {
    async function loadProblems(): Promise<void> {
      const response = await api.get(`/deliveryproblems`);
      setProblem(response.data);
    }
    loadProblems();
  }, []);

  return (
    <Container>
      <HeaderColor />
      <ProblemListContainer
        data={problem}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <Problem>
            <Description>{item.description}</Description>
            <Date>
              {format(parseISO(item.created_at), "dd'/'MM'/'yyyy", {
                locale: pt,
              })}
            </Date>
          </Problem>
        )}
      />
    </Container>
  );
};

export default ProblemList;
