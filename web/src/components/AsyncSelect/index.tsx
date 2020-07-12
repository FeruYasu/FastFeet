import React, { useRef, useEffect } from 'react';
import Select, { OptionTypeBase, Props as AsyncProps } from 'react-select';
import { useField } from '@unform/core';

interface Props extends AsyncProps<OptionTypeBase> {
  name: string;
}

const AsyncSelect: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: undefined,
      getValue: (ref: any) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option: OptionTypeBase) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <div>
      <Select
        defaultValue={defaultValue}
        cacheOptions
        ref={selectRef}
        {...rest}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default AsyncSelect;
