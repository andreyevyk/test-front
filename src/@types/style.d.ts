// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    [key: string]: any;

    fonts: {
      primary: string;
    };

    colors: {
      primary: string;
      primary_dark: string;
      primary_light: string;

      secondary: string;

      error: string;

      title: string;
      text: string;
      line: string;

      background: string;
      shape: string;
      [key: string]: string;
    };
  }
}
