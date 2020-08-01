import React, { InputHTMLAttributes } from 'react';

import { MdWbSunny, MdBrightness3 } from 'react-icons/md';
import { Container } from './styles';

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
}

const Switch: React.FC<SwitchProps> = ({ id, ...rest }) => {
  return (
    <Container>
      <label htmlFor={id}>
        <input id={id} type="checkbox" {...rest} />

        <span>
          <MdBrightness3 size={22} color="#fff" />
          <MdWbSunny size={22} color="#ffbd42" />
        </span>
      </label>
    </Container>
  );
};

export default Switch;
