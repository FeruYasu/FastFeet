import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import {
  Link,
  RouteComponentProps,
  withRouter,
  useLocation,
  useParams,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import AsyncSelect from '../../components/AsyncSelect';
import Header from '../../components/Header';
import api from '../../services/api';
import Input from '../../components/Input';

import {
  Container,
  Content,
  TitleContainer,
  ButtonsContainer,
  BackButton,
  SaveButton,
  SelectContainer,
  BoxContainer,
} from './styles';

interface Courier {
  name: string;
  id: number;
}

interface Recipient {
  name: string;
  id: number;
}

const HandleDelivery: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [courier, setCourier] = useState<Courier>();
  const [recipient, setRecipient] = useState<Recipient>();
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();

  useEffect(() => {
    async function loadDelivery(): Promise<void> {
      const response = await api.get(`/deliveries/${id}`);

      if (formRef.current) {
        formRef.current.setData({
          product: response.data.product,
        });

        formRef.current.setFieldValue('recipient_id', {
          value: response.data.Recipient.id,
          label: response.data.Recipient.name,
        });
        formRef.current.setFieldValue('courier_id', {
          value: response.data.Courier.id,
          label: response.data.Courier.name,
        });
      }
    }

    async function loadCourier(): Promise<void> {
      const response = await api.get('couriers');

      const courierlist = response.data.map((courierdata: Courier) => ({
        label: courierdata.name,
        value: courierdata.id,
      }));

      setCourier(courierlist);
    }

    async function loadRecipient(): Promise<void> {
      const response = await api.get('recipients');

      const recipientlist = response.data.map((recipientdata: Recipient) => ({
        label: recipientdata.name,
        value: recipientdata.id,
      }));

      setRecipient(recipientlist);
    }

    if (id) {
      loadDelivery();
    }
    loadRecipient();
    loadCourier();
  }, [id]);

  const handleSubmit = useCallback(async () => {
    if (formRef.current) {
      if (id) {
        await api.put(`deliveries/${id}`, formRef.current.getData());
        history.push('/deliveries');
      } else {
        await api.post('deliveries', formRef.current.getData());
      }
    }
  }, [history, id]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TitleContainer>
              <h1>{location.pathname}</h1>
              <ButtonsContainer>
                <Link to="/deliveries">
                  <BackButton>
                    <MdKeyboardArrowLeft size={20} />
                    VOLTAR
                  </BackButton>
                </Link>
                <SaveButton type="submit" onClick={handleSubmit}>
                  <MdDone size={20} />
                  SALVAR
                </SaveButton>
              </ButtonsContainer>
            </TitleContainer>

            <BoxContainer>
              <SelectContainer>
                <div>
                  <p>Destinatário</p>
                  <AsyncSelect
                    name="recipient_id"
                    placeholder="Selecione um destinatário..."
                  />
                </div>
                <div>
                  <p>Entregador</p>
                  <AsyncSelect
                    name="courier_id"
                    placeholder="Selecione um entregador..."
                  />
                </div>
              </SelectContainer>
              <div>
                <p>Nome do produto</p>
                <Input name="product" placeholder="Descreva o produto" />
              </div>
            </BoxContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default withRouter(HandleDelivery);
