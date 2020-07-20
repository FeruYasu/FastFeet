import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ChangeEvent,
} from 'react';
import { MdKeyboardArrowLeft, MdDone, MdPermIdentity } from 'react-icons/md';
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

interface Courier {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
}

const HandleCouriers: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [courier, setCourier] = useState<Courier | null>(null);
  const [title, setTitle] = useState('Novo entregador');

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    async function loadCourier(): Promise<void> {
      const response = await api.get<Courier>(`/couriers/${id}`);

      if (formRef.current) {
        formRef.current.setData({
          name: response.data.name,
          email: response.data.email,
        });
      }

      setCourier(response.data);
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

  const handleAvatarChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        const data = new FormData();
        data.append('avatar', e.target.files[0]);

        api.patch(`/couriers/avatar/${id}`, data).then((response) => {
          setCourier(response.data);
        });
      }
    },
    [id],
  );

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
                {courier?.avatar_url ? (
                  <div>
                    <label htmlFor="avatar">
                      <input
                        type="file"
                        id="avatar"
                        onChange={handleAvatarChange}
                      />
                    </label>

                    <img src={courier.avatar_url} alt={courier.name} />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="avatar">
                      <input
                        type="file"
                        id="avatar"
                        onChange={handleAvatarChange}
                      />
                    </label>

                    <MdPermIdentity color="#b89ee6" size={60} />
                    <p>Adicionar imagem</p>
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
