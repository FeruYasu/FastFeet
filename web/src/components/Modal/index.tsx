import React from 'react';
import { format, parse, parseISO } from 'date-fns';
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
  start_date?: string;
  end_date?: string;
  recipient: recipient;
  signature_url?: string;
}

interface ModalProps {
  data: Data;
  handleView: () => void;
}

const Modal: React.FC<ModalProps> = ({ data, handleView }) => {
  let startDate = null;
  let endDate = null;

  console.log(data);

  if (data.start_date) {
    startDate = format(parseISO(data.start_date), "dd'/'MM'/'yy", {
      locale: pt,
    });
  }

  if (data.end_date) {
    endDate = format(parseISO(data.end_date), "dd'/'MM'/'yy", {
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
        <img src={data.signature_url} alt="" />
      </ModalContent>
    </Container>
  );
};

export default Modal;
