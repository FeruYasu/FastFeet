import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MdKeyboardArrowLeft, MdDone } from 'react-icons/md';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useParams, useHistory } from 'react-router-dom';
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
  ImgContainer,
  BoxContainer,
} from './styles';

const HandleCouriers: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [photo, setPhoto] = useState(null);
  const [title, setTitle] = useState('Novo entregador');

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function loadCourier(): Promise<void> {
      const response = await api.get(`/couriers/${id}`);

      if (formRef.current) {
        formRef.current.setData({
          name: response.data.name,
          email: response.data.email,
        });
      }
    }

    if (id) {
      setTitle('Edição de entregador');
    }

    loadCourier();
  }, [id]);

  const handleSubmit = useCallback(async () => {
    if (formRef.current) {
      if (id) {
        await api.put(`couriers/${id}`, formRef.current.getData());
      } else {
        await api.post('couriers', formRef.current.getData());
      }

      history.push('/couriers');
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
                <Link to="/couriers">
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
              <ImgContainer>
                {photo ? (
                  <img src="" alt="" />
                ) : (
                  <div>
                    <p />
                  </div>
                )}
              </ImgContainer>
              <div>
                <p>Nome</p>
                <Input name="name" placeholder="Nome" />
                <p>Email</p>
                <Input name="email" placeholder="nome@email.com.br" />
              </div>
            </BoxContainer>
          </Form>
        </Content>
      </Container>
    </>
  );
};

export default HandleCouriers;
