import React, { useCallback, useState, useEffect } from 'react';
import { Alert, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api';
import photo from '../../assets/delivered.png';
import packageCheck from '../../assets/package-delivered.png';

import {
  Container,
  HeaderColor,
  ConfirmDeliveryContainer,
  PhotoButton,
  ConfirmButton,
  SignaturePhoto,
  ExplanationText,
  ModalContainer,
  ModalContent,
  ImageIcon,
  ModalText,
  ModalSubText,
} from './styles';

interface RouteParams {
  data: {
    id: number;
  };
}

const ConfirmDelivery: React.FC = () => {
  const [signature, setSignature] = useState<{ uri: string }>(photo);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const route = useRoute();
  const { data } = route.params as RouteParams;

  const handlePhoto = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar câmera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      (response) => {
        if (response.didCancel) {
          return;
        }
        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar');
          return;
        }

        const source = { uri: response.uri };
        setSignature(source);
      }
    );
  }, []);

  const handleSend = useCallback(() => {
    const photoData = new FormData();

    photoData.append('signature', {
      type: 'image/jpeg',
      name: `product-${data.id}.jpg`,
      uri: signature.uri,
    });

    api.post(`/deliveries/confirm/${data.id}`, photoData);
  }, [data.id, signature.uri]);

  return (
    <>
      <Container>
        <HeaderColor />
        <ConfirmDeliveryContainer>
          <SignaturePhoto source={signature} />
          <PhotoButton onPress={handlePhoto}>
            <Icon name="photo-camera" size={30} color="#FFF" />
          </PhotoButton>
          <ExplanationText>
            Tire uma foto do pacote com a assinatura do destinatário
          </ExplanationText>
          <ConfirmButton
            onPress={() => {
              handleSend();
              setModalVisible(true);
            }}
          >
            Enviar Foto
          </ConfirmButton>
        </ConfirmDeliveryContainer>
      </Container>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <ModalContainer
          onPress={() => {
            setModalVisible(false);
            navigation.navigate('Dashboard');
          }}
        >
          <ModalContent>
            <ImageIcon source={packageCheck} resizeMode="center" />
            <ModalText>Foto Enviada!</ModalText>
            <ModalSubText>Pacote entregue.</ModalSubText>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ConfirmDelivery;
