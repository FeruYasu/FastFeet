import React, { useCallback, useRef, useState } from 'react';
import { KeyboardAvoidingView, Alert, Platform } from 'react-native';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import Input from '../../components/Input';

import { useAuth } from '../../hooks/auth';

import logoff from '../../assets/logoFFx1.png';
import backgroundImage from '../../assets/backgroundFF.png';

import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container,
  TopContainer,
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
  email: string;
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
          email: Yup.string().required('Digite um email valido'),
        });

        await schema.validate(data, { abortEarly: false });
        await signIn({
          email: data.email,
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
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Container>
        <TopContainer>
          <BackgroundImage source={backgroundImage} />
          <LogoContainer>
            <LogoIcon source={logoff} />
            <YellowText>
              FAST<Text>FEET</Text>
            </YellowText>
          </LogoContainer>

          <TextContainer>
            <YellowText>Entregador,</YellowText>
            <Text>você é nosso {'\n'}maior valor</Text>
            <SmallText>
              Faça seu login para {'\n'}começar suas entregas
            </SmallText>
          </TextContainer>
        </TopContainer>

        <FormContainer ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon="user-alt" placeholder="Email" />

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
    </KeyboardAvoidingView>
  );
};

export default SignIn;
