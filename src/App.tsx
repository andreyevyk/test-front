import React from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/globalStyle'
import { defaultTheme } from './styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div>Boa sorte! 🚀</div>
    </ThemeProvider>
  )
}

export default App
