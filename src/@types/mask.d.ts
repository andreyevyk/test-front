import 'react-input-mask';

declare module 'react-input-mask' {
  interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    maskChar?: string | null | undefined;
  }
}
