import React from 'react';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, ModalBackground, ModalContent } from './styles';

interface recipient {
  street: string;
  number: number;
  city: string;
  zipcode: string;
  state: string;
}

interface Data {
  start_date?: Date;
  end_date?: Date;
  recipient: recipient;
}

interface ModalProps {
  data: Data;
  handleView: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, handleView }) => {
  let startDate = null;
  let endDate = null;

  if (data.start_date) {
    startDate = format(data.start_date, "dd'/'MM'/'yy", {
      locale: pt,
    });
  }

  if (data.end_date) {
    endDate = format(data.end_date, "dd'/'MM'/'yy", {
      locale: pt,
    });
  }

  return (
    <Container>
      <ModalBackground onClick={() => handleView()} />
      <ModalContent>
        <h4>Informações da encomenda</h4>
        <p>
          {data.recipient.street}, {data.recipient.number}
        </p>
        <p>
          {data.recipient.city} / {data.recipient.state}
        </p>
        <p>{data.recipient.zipcode}</p>
        <hr />
        <h4>Datas</h4>
        <p>
          <strong>Retirada: </strong>
          {startDate}
        </p>
        <p>
          <strong>Entrega: </strong>
          {endDate}
        </p>
        <hr />
        <h4>Assinatura do destinatário</h4>
        <img src="" alt="" />
      </ModalContent>
    </Container>
  );
};

export default Modal;
