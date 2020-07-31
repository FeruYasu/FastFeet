import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, withRouter, useParams } from 'react-router-dom';
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

interface Options {
  value: string;
  label: string;
}

const HandleDelivery: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [courier, setCourier] = useState<Options[]>();
  const [recipient, setRecipient] = useState<Options[]>();
  const [title, setTitle] = useState('Nova encomenda');

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    async function loadDelivery(): Promise<void> {
      const response = await api.get(`/deliveries/${id}`);

      if (formRef.current) {
        formRef.current.setData({
          product: response.data.product,
        });

        formRef.current.setFieldValue('recipient_id', {
          value: response.data.recipient.id,
          label: response.data.recipient.name,
        });
        formRef.current.setFieldValue('courier_id', {
          value: response.data.courier.id,
          label: response.data.courier.name,
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
      const response = await api.get('/recipients');

      const recipientlist = response.data.map((recipientdata: Recipient) => ({
        label: recipientdata.name,
        value: recipientdata.id,
      }));

      setRecipient(recipientlist);
    }

    if (id) {
      setTitle('Edição de encomendas');
    }

    loadDelivery();
    loadRecipient();
    loadCourier();
  }, [id]);

  const handleSubmit = useCallback(async () => {
    if (formRef.current) {
      if (id) {
        await api.put(`deliveries/${id}`, formRef.current.getData());
      } else {
        await api.post('deliveries', formRef.current.getData());
      }

      history.push('/deliveries');
    }
  }, [history, id]);

  return (
    <>
      <Header />
      <Container>
        <Content>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <TitleContainer>
              <h1>{title}</h1>
              <ButtonsContainer>
                <Link to="/deliveries">
                  <BackButton>
                    <MdKeyboardArrowLeft size={20} />
                    VOLTAR
                  </BackButton>
                </Link>
                <SaveButton type="submit">
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
                    options={recipient}
                  />
                </div>
                <div>
                  <p>Entregador</p>
                  <AsyncSelect
                    name="courier_id"
                    placeholder="Selecione um entregador..."
                    options={courier}
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
