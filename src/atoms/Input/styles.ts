import styled, { css } from 'styled-components'

interface WrapperProps {
  hasError: boolean;
}

// eslint-disable-next-line prettier/prettier
export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
    color: ${({ theme }) => theme.colors.label};
    font-size: 12px;
    font-weight: 700;
    line-height: 14px;
  }

  input {
    outline: none;
    width: 100%;
    box-sizing: border-box;

    padding: 12px;

    border: 1px solid ${({ theme }) => theme.colors.line};
    border-radius: 3px;

    background: ${({ theme }) => theme.colors.shape};
    box-shadow: inset 0 1px 2px 0 rgba(0, 0, 0, 0.2);

    font-size: 14px;
    line-height: 19px;

    &:focus {
      border-color: ${({ theme }) => theme.colors.secondary};
    }

    ::placeholder {
      color: #e0e7ee;
    }

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: ${({ theme }) => theme.colors.error};
      `}
  }
  .error{
    margin-top: 3px;

    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.error}
  }
`
