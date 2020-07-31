import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      accent: string;
      secundary: string;
      background: string;
      header: string;
      border: string;
      title: string;
      text: string;
      calendar: string;
      cardBackground: string;
      inputBackground: string;
      card: string;
      cardtext: string;
    };

    entregue: {
      color: string;
      background: string;
    };

    pendente: {
      color: string;
      background: string;
    };

    retirado: {
      color: string;
      background: string;
    };

    cancelado: {
      color: string;
      background: string;
    };
  }
}
