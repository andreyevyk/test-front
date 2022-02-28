import { forwardRef, InputHTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';
import MaskedInput from 'react-input-mask';
import { Wrapper } from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  error?: string;
  label: string;
  containerStyle?: CSSProperties;
  mask?: string;
}

export const Input = forwardRef<any, InputProps>(
  ({ name, className, containerStyle, label, mask = '', error, ...rest }, ref) => {
    return (
      <Wrapper className={className} hasError={!!error} style={containerStyle}>
        <label htmlFor={name}>{label}</label>
        <MaskedInput id={name} name={name} ref={ref} {...rest} mask={mask} maskChar={null} />
        {error && <span className="error">{error}</span>}
      </Wrapper>
    );
  }
);
