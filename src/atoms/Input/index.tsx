import { InputHTMLAttributes } from 'react'
import { CSSProperties } from 'styled-components'
import { Wrapper } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  error?: string;
  label: string;
  containerStyle?: CSSProperties;
}

export function Input({ id, containerStyle, label, error, ...rest }: InputProps) {
  return (
    <Wrapper hasError={!!error} style={containerStyle}>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
      {error && <span className="error">{error}</span>}
    </Wrapper>
  )
}
