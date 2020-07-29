import React, { useCallback, useRef } from 'react';
import { Image, Alert } from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/mobile';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo-white.png';
import backgroundImage from '../../assets/placeholder.png';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  TextContainer,
  LogoContainer,
  YellowText,
  BackgroundImage,
  Text,
  SmallText,
  ForgotPassword,
  ForgotPasswordText,
  SubmitButton,
} from './styles';

interface SignInFormData {
  id: number;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          id: Yup.number().required('Digite um ID'),
        });

        await schema.validate(data, { abortEarly: false });
        await signIn({
          id: data.id,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credencias.'
        );
      }
    },
    [signIn]
  );

  return (
    <Container>
      <BackgroundImage source={backgroundImage}>
        <LogoContainer>
          <Image source={logo} />
          <Image source={logo} />
        </LogoContainer>

        <TextContainer>
          <YellowText>Entregador,</YellowText>
          <Text>você é nosso {'\n'}maior valor</Text>
          <SmallText>Faça seu login para {'\n'}começar suas entregas</SmallText>
        </TextContainer>
      </BackgroundImage>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input
          keyboardType="numeric"
          name="id"
          icon="user-alt"
          placeholder="Informe seu ID de cadastro"
        />

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>

        <SubmitButton
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Entrar no sistema
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default SignIn;
