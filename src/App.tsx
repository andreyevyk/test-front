import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import GlobalStyle from './styles/globalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
