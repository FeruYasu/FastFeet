import React, { useCallback, useRef, useState } from 'react';
import { Image, Alert } from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import logofastfeet from '../../assets/logofastfeet.jpg';
import logoff from '../../assets/logoff.png';
import backgroundImage from '../../assets/placeholder.png';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  TextContainer,
  LogoContainer,
  LogoIcon,
  YellowText,
  BackgroundImage,
  FormContainer,
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
  const [secureText, setSecureText] = useState(true);

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
          <LogoIcon source={logoff} />
          <Image source={logofastfeet} />
        </LogoContainer>

        <TextContainer>
          <YellowText>Entregador,</YellowText>
          <Text>você é nosso {'\n'}maior valor</Text>
          <SmallText>Faça seu login para {'\n'}começar suas entregas</SmallText>
        </TextContainer>
      </BackgroundImage>

      <FormContainer ref={formRef} onSubmit={handleSubmit}>
        <Input
          keyboardType="numeric"
          name="id"
          icon="user-alt"
          placeholder="Informe seu ID de cadastro"
        />

        <Input
          secureTextEntry={secureText}
          name="password"
          icon="lock"
          password
          placeholder="Sua senha"
          handleSecureText={() => {
            setSecureText(!secureText);
          }}
        />

        <SubmitButton
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Entrar
        </SubmitButton>

        <ForgotPassword>
          <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
        </ForgotPassword>
      </FormContainer>
    </Container>
  );
};

export default SignIn;
