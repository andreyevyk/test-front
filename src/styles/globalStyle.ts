import { createGlobalStyle } from 'styled-components'
import { resetCss } from './resetCss'

const GlobalStyle = createGlobalStyle`
  ${resetCss}

  body{
    background-color: #282c34;
    color: #fff
  }
}

`

export default GlobalStyle
