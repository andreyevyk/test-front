import { createGlobalStyle } from 'styled-components'
import { resetCss } from './resetCss'

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;

    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
}

`

export default GlobalStyle
