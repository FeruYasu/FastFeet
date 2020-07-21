import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      accent: string;
      secundary: string;
      background: string;
      text: string;
      calendar: string;
      nextAppointmentBackground: string;
      inputBackground: string;
      card: string;
      cardtext: string;
    };
  }
}
