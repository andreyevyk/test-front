import { render, RenderResult } from '@testing-library/react';
import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Layout } from './Layout';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Layout>teste</Layout>
    </ThemeProvider>
  );

describe('Layout Template', () => {
  it('Should render Layout Template', () => {
    const { getByText } = renderComponent();

    expect(getByText('teste')).toBeInTheDocument();
  });
});
