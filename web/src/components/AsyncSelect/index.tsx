import React, { useRef, useEffect } from 'react';
import Select, { OptionTypeBase, Props as AsyncProps } from 'react-select';
import { useField } from '@unform/core';

import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface Props extends AsyncProps<OptionTypeBase> {
  name: string;
}

const AsyncSelect: React.FC<Props> = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  const themeContext = useContext(ThemeContext);

  const customStyles = {
    menu: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: themeContext.colors.inputBackground,
      color: themeContext.colors.background,
    }),

    container: (provided: any, state: any) => ({
      ...provided,

      border: state.isFocused
        ? `1px solid ${themeContext.colors.primary}!important`
        : '1px solid #dddddd',
    }),

    valueContainer: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: themeContext.colors.inputBackground,
    }),

    indicatorsContainer: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: themeContext.colors.inputBackground,
    }),

    multiValue: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? themeContext.colors.primary
        : themeContext.colors.text,
    }),

    placeholder: (provided: any, state: any) => ({
      ...provided,
      color: themeContext.colors.border,
    }),

    option: (provided: any, state: any) => {
      let backColor;
      if (state.isSelected) {
        backColor = themeContext.colors.background;
      }

      return {
        ...provided,
        color: state.isSelected
          ? themeContext.colors.primary
          : themeContext.colors.text,
        backgroundColor: backColor,
        ':active': {
          backgroundColor:
            !state.isDisabled &&
            (state.isSelected
              ? themeContext.colors.primary
              : themeContext.colors.primary),
        },
      };
    },

    control: (provided: any, state: any) => ({
      ...provided,
      border: state.isFocused
        ? `1px solid ${themeContext.colors.primary}!important`
        : '#dddddd!important',
    }),

    singleValue: (provided: any, state: any) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return {
        ...provided,
        opacity,
        transition,
        color: themeContext.colors.text,
      };
    },

    input: () => ({
      color: themeContext.colors.text,
    }),
  };

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
        styles={customStyles}
        {...rest}
      />
      {error && <span>{error}</span>}
    </div>
  );
};

export default AsyncSelect;
