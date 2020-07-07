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
  };
  recipient: {
    name: string;
    city: string;
    street: string;
    number: number;
    zipcode: string;
    state: string;
  };
  status: string;
  courierInitials: string;
  start_date?: Date;
  end_date?: Date;
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
      const response = await api.get('/deliveries');

      const data = response.data.map((delivery: Delivery) => ({
        ...delivery,
        status: statusCheck(delivery),
        courierInitials: delivery.courier.name.match(/\b\w/g) || [].join(''),
      }));

      console.log(data);

      setDeliveries(data);
    }

    loadDeliveries();
  }, [query, statusCheck]);

  const handleVisible = useCallback(
    (id: number) => {
      if (open === id) {
        id = 0;
      }
      setOpen(id);
    },
    [open],
  );

  const handleView = useCallback(
    (id: number) => {
      if (modalopen === id) {
        id = 0;
      }
      setModalOpen(id);
      setOpen(0);
    },
    [modalopen],
  );

  async function handleDelete(id: number): Promise<void> {
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
  }

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
                placeholder="Buscar por encomendas"
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
                  <span>{delivery.courierInitials}</span>
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
                      handleview={() => handleView(delivery.id)}
                      handledelete={() => handleDelete(delivery.id)}
                      path="/deliveries/edit"
                      title="Edição de encomendas"
                      view
                      edit
                      exclude
                    />
                  )}
                </div>
                {modalopen === delivery.id && (
                  <Modal data={delivery} handleview={() => handleView(0)} />
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
