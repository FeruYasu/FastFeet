import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';

import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';
import api from '../../services/api';
import Header from '../../components/Header';
import Actions from '../../components/Actions';
import Modal from '../../components/Modal';

import {
  Container,
  Content,
  ActionsContainer,
  Courier,
  DeliveryList,
  Status,
  IconSearch,
} from './styles';

interface Delivery {
  id: number;
  product: string;
  courier: {
    name: string;
    email: string;
    avatar_url?: string;
  };
  recipient: {
    name: string;
    city: string;
    street: string;
    number: number;
    zipcode: string;
    state: string;
  };
  status: 'Entregue' | 'Cancelado' | 'Retirado' | 'Pendente';
  courierInitials: string;
  start_date?: string;
  end_date?: string;
}

const DeliveriesDashboard: React.FC = () => {
  const [deliveries, setDeliveries] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);
  const [modalopen, setModalOpen] = useState(0);

  const statusCheck = useCallback((delivery) => {
    let status = 'Pendente';
    if (delivery.start_date) {
      status = 'Retirado';
    }
    if (delivery.end_date) {
      status = 'Entregue';
    }
    if (delivery.canceled_at) {
      status = 'Cancelado';
    }
    return status;
  }, []);

  useEffect(() => {
    async function loadDeliveries(): Promise<void> {
      const response = await api.get('/deliveries', {
        params: {
          product: query,
        },
      });

      const data = response.data.map((delivery: Delivery) => ({
        ...delivery,
        status: statusCheck(delivery),
        courierInitials: delivery.courier.name.match(/\b\w/g) || [].join(''),
      }));

      setDeliveries(data);
    }

    loadDeliveries();
  }, [query, statusCheck]);

  const handleVisible = useCallback(
    (id: number) => {
      let modal = id;
      if (open === id) {
        modal = 0;
      }
      setOpen(modal);
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
        const { status } = await api.delete(`deliveries/${id}`);

        if (status === 204) {
          setDeliveries(
            deliveries.filter((delivery: Delivery) => delivery.id !== id),
          );
        } else {
          // toast.error('Não possível remover a encomenda. Tente novamente');
        }
      }
    },
    [deliveries],
  );

  const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando encomendas</h1>
          <ActionsContainer>
            <div>
              <IconSearch size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  handleFilter(e);
                }}
                placeholder="Buscar por nome do produto"
              />
            </div>

            <Link
              to={{
                pathname: '/deliveries/new',
              }}
            >
              <MdAdd size={26} color="#FFF" />
              CADASTRAR
            </Link>
          </ActionsContainer>
          <ul>
            <li>ID</li>
            <li>Destinatário</li>
            <li>Entregador</li>
            <li>Cidade</li>
            <li>Produto</li>
            <li>Status</li>
            <li>Ações</li>
          </ul>
          <DeliveryList>
            {deliveries.map((delivery: Delivery) => (
              <li key={delivery.id}>
                <p>#{delivery.id}</p>
                <p>{delivery.recipient.name}</p>
                <Courier>
                  {delivery.courier.avatar_url ? (
                    <img
                      src={delivery.courier.avatar_url}
                      alt={delivery.courier.name}
                    />
                  ) : (
                    <span>{delivery.courierInitials}</span>
                  )}
                  <p>{delivery.courier.name}</p>
                </Courier>
                <p>{delivery.recipient.city}</p>
                <p>{delivery.product}</p>
                <Status color={delivery.status}>{delivery.status}</Status>

                <div>
                  <MdMoreHoriz
                    size={26}
                    onClick={() => handleVisible(delivery.id)}
                  />
                  {open === delivery.id && (
                    <Actions
                      id={open}
                      handleView={() => handleView(delivery.id)}
                      handleDelete={() => handleDelete(delivery.id)}
                      path="/deliveries/edit"
                      edit
                      exclude="Excluir"
                    />
                  )}
                </div>
                {modalopen === delivery.id && (
                  <Modal data={delivery} handleView={() => handleView(0)} />
                )}
              </li>
            ))}
          </DeliveryList>
        </Content>
      </Container>
    </>
  );
};

export default DeliveriesDashboard;
