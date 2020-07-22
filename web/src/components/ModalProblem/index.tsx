import React from 'react';

import { Container, ModalBackground, ModalContent } from './styles';

interface ModalProps {
  description: string;
  handleView: () => void;
}

const ModalProblem: React.FC<ModalProps> = ({ description, handleView }) => {
  return (
    <Container>
      <ModalBackground onClick={() => handleView()} />
      <ModalContent>
        <h4>Descrição do problema</h4>
        <p>{description}</p>
      </ModalContent>
    </Container>
  );
};

export default ModalProblem;
