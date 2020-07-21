import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import api from '../../services/api';
import Header from '../../components/Header';
import Actions from '../../components/Actions';

import {
  Container,
  Content,
  ActionsContainer,
  ProblemList,
  IconSearch,
} from './styles';

interface Problem {
  id: number;
  description: string;
}

const ProblemsDashboard: React.FC = () => {
  const [problems, setProblems] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);

  useEffect(() => {
    api
      .get('/problems', {
        params: {
          name: query,
        },
      })
      .then((response) => {
        setProblems(response.data);
      });
  }, [query]);

  const handleVisible = useCallback(
    (id: number) => {
      let actionOpen = id;
      if (open === id) {
        actionOpen = 0;
      }
      setOpen(actionOpen);
    },
    [open],
  );

  const handleDelete = useCallback(
    async (id: number) => {
      if (window.confirm('Deseja excluir?')) {
        const { status } = await api.delete(`recipients/${id}`);

        if (status === 204) {
          setProblems(problems.filter((problem: Problem) => problem.id !== id));
        } else {
          // toast.error('Não possível remover a encomenda. Tente novamente');
        }
      }
    },
    [problems],
  );

  const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando problemas</h1>
          <ActionsContainer>
            <div>
              <IconSearch size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  handleFilter(e);
                }}
                placeholder="Buscar por problemas"
              />
            </div>

            <Link
              to={{
                pathname: '/problems/new',
              }}
            >
              <MdAdd size={26} color="#FFF" />
              CADASTRAR
            </Link>
          </ActionsContainer>
          <ul>
            <li>ID</li>
            <li>Descrição</li>
            <li>Ações</li>
          </ul>
          <ProblemList>
            {problems.map((problem: Problem) => (
              <li key={problem.id}>
                <p>#{problem.id}</p>
                <p>{problem.description}</p>
                <div>
                  <MdMoreHoriz
                    size={26}
                    onClick={() => handleVisible(problem.id)}
                  />
                  {open === problem.id && (
                    <Actions
                      id={problem.id}
                      handleDelete={() => handleDelete(problem.id)}
                      edit
                      path="/problems/edit"
                      exclude
                    />
                  )}
                </div>
              </li>
            ))}
          </ProblemList>
        </Content>
      </Container>
    </>
  );
};

export default ProblemsDashboard;
