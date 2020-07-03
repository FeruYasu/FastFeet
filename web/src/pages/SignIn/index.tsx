import React, { useState, useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';

import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FiMail, FiLock } from 'react-icons/fi';

import { Form } from '@unform/web';

import logo from '../../assets/fastfeet-logo.png';
import loginImg from '../../assets/login-photo.jpg';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';

import { Container, ImageContainer, Content } from './styles';
import { useAuth } from '../../hooks/Auth';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        setLoading(true);
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });
        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [signIn, history],
  );

  return (
    <Container>
      <Content>
        <img src={logo} alt="FastFeet" />
        <Form onSubmit={handleSubmit}>
          <Input
            name="email"
            type="email"
            icon={FiMail}
            placeholder="exemple@email.com"
          />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="************"
          />
          <button type="submit">
            {loading ? 'Carregando...' : 'Entrar no sistema'}
          </button>
        </Form>
      </Content>
      <ImageContainer>
        <img src={loginImg} alt="Motoboy entregando a encomenda" />
      </ImageContainer>
    </Container>
  );
};

export default SignIn;
