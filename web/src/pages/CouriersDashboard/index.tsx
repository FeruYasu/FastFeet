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
  Courier,
  CourierList,
  IconSearch,
} from './styles';

interface Courier {
  id: number;
  name: string;
  email: string;
  status: string;
  courierInitials: string;
  start_date?: Date;
  end_date?: Date;
}

const CouriersDashboard: React.FC = () => {
  const [couriers, setCourier] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);

  useEffect(() => {
    async function loadCouriers(): Promise<void> {
      const response = await api.get('/couriers', {
        params: {
          name: query,
        },
      });

      const data = response.data.map((courier: Courier) => ({
        ...courier,
        courierInitials: courier.name.match(/\b\w/g) || [].join(''),
        // status: statusCheck(courier),
      }));

      setCourier(data);
    }

    loadCouriers();
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
        const { status } = await api.delete(`couriers/${id}`);

        if (status === 204) {
          setCourier(couriers.filter((courier: Courier) => courier.id !== id));
        } else {
          // toast.error('Não possível remover a encomenda. Tente novamente');
        }
      }
    },
    [couriers],
  );

  const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando entregadores</h1>
          <ActionsContainer>
            <div>
              <IconSearch size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  handleFilter(e);
                }}
                placeholder="Buscar por entregador"
              />
            </div>

            <Link
              to={{
                pathname: '/couriers/new',
              }}
            >
              <MdAdd size={26} color="#FFF" />
              CADASTRAR
            </Link>
          </ActionsContainer>
          <ul>
            <li>ID</li>
            <li>Foto</li>
            <li>Nome</li>
            <li>Email</li>
            <li>Ações</li>
          </ul>
          <CourierList>
            {couriers.map((courier: Courier) => (
              <li key={courier.id}>
                <p>#{courier.id}</p>
                <Courier>
                  <span>{courier.courierInitials}</span>
                </Courier>

                <p>{courier.name}</p>
                <p>{courier.email}</p>

                <div>
                  <MdMoreHoriz
                    size={26}
                    onClick={() => handleVisible(courier.id)}
                  />
                  {open === courier.id && (
                    <Actions
                      id={open}
                      handleDelete={() => handleDelete(courier.id)}
                      edit
                      path="/couriers/edit"
                      exclude
                    />
                  )}
                </div>
              </li>
            ))}
          </CourierList>
        </Content>
      </Container>
    </>
  );
};

export default CouriersDashboard;
