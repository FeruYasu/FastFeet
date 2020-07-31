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
  RecipientList,
  IconSearch,
} from './styles';

interface Recipient {
  id: number;
  name: string;
  street: string;
  number: string;
  city: string;
  zipcode: string;
  state: string;
}

const RecipientDashboard: React.FC = () => {
  const [recipients, setRecipients] = useState([]);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(0);

  useEffect(() => {
    async function loadRecipients(): Promise<void> {
      const response = await api.get('/recipients', {
        params: {
          name: query,
        },
      });

      setRecipients(response.data);
    }

    loadRecipients();
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
          setRecipients(
            recipients.filter((recipient: Recipient) => recipient.id !== id),
          );
        } else {
          // toast.error('Não possível remover a encomenda. Tente novamente');
        }
      }
    },
    [recipients],
  );

  const handleFilter = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <h1>Gerenciando destinatários</h1>
          <ActionsContainer>
            <div>
              <IconSearch size={22} />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  handleFilter(e);
                }}
                placeholder="Buscar por destinatários"
              />
            </div>

            <Link
              to={{
                pathname: '/recipients/new',
              }}
            >
              <MdAdd size={26} color="#FFF" />
              CADASTRAR
            </Link>
          </ActionsContainer>
          <ul>
            <li>ID</li>
            <li>Nome</li>
            <li>Endereço</li>
            <li>Ações</li>
          </ul>
          <RecipientList>
            {recipients.map((recipient: Recipient) => (
              <li key={recipient.id}>
                <p>#{recipient.id}</p>
                <p>{recipient.name}</p>
                <p>
                  {recipient.street} {recipient.number}, {recipient.city} -{' '}
                  {recipient.state},{recipient.zipcode}
                </p>

                <div>
                  <MdMoreHoriz
                    size={26}
                    onClick={() => handleVisible(recipient.id)}
                  />
                  {open === recipient.id && (
                    <Actions
                      id={recipient.id}
                      handleDelete={() => handleDelete(recipient.id)}
                      edit
                      path="/recipients/edit"
                      exclude="Excluir"
                    />
                  )}
                </div>
              </li>
            ))}
          </RecipientList>
        </Content>
      </Container>
    </>
  );
};

export default RecipientDashboard;
