import { FC, forwardRef, InputHTMLAttributes } from 'react';
import { CSSProperties } from 'styled-components';
import MaskedInput from 'react-input-mask';
import { Wrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  className?: string;
  error?: string;
  label: string;
  containerStyle?: CSSProperties;
  mask?: string;
}

export const Input = forwardRef<any, InputProps>(
  ({ id, className, containerStyle, label, mask = '', error, ...rest }, ref) => {
    return (
      <Wrapper className={className} hasError={!!error} style={containerStyle}>
        <label htmlFor={id}>{label}</label>
        <MaskedInput ref={ref} {...rest} mask={mask} maskChar={null} />
        {error && <span className="error">{error}</span>}
      </Wrapper>
    );
  }
);
