import React, { useState, useEffect, useCallback } from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import api from '../../services/api';
import Header from '../../components/Header';
import Actions from '../../components/Actions';
import ModalProblem from '../../components/ModalProblem';

import { Container, Content, ProblemList } from './styles';

interface Problem {
  id: number;
  delivery_id: number;
  description: string;
}

const ProblemsDashboard: React.FC = () => {
  const [problems, setProblems] = useState([]);
  const [open, setOpen] = useState(0);
  const [modalopen, setModalOpen] = useState(0);

  useEffect(() => {
    api.get('/deliveryproblems').then((response) => {
      setProblems(response.data);
    });
  }, []);

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

  const handleView = useCallback(
    (id: number) => {
      let modal = id;
      if (modalopen === id) {
        modal = 0;
      }
      setModalOpen(modal);
      setOpen(0);
    },
    [modalopen],
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

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando problemas</h1>

          <ul>
            <li>Encomenda</li>
            <li>Descrição</li>
            <li>Ações</li>
          </ul>
          <ProblemList>
            {problems.map((problem: Problem) => (
              <li key={problem.id}>
                <p>#{problem.delivery_id}</p>
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
                      handleView={() => handleView(problem.id)}
                      path="/problems/edit"
                      exclude="Cancelar"
                    />
                  )}
                </div>
                {modalopen === problem.id && (
                  <ModalProblem
                    description={problem.description}
                    handleView={() => handleView(0)}
                  />
                )}
              </li>
            ))}
          </ProblemList>
        </Content>
      </Container>
    </>
  );
};

export default ProblemsDashboard;
