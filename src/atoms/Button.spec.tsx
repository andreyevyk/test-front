import { render, RenderResult } from '@testing-library/react';
import { ButtonHTMLAttributes } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Button } from './Button';

interface IRenderComoponent extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: DefaultTheme;
}

const renderComponent = ({ theme, title, ...rest }: IRenderComoponent): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Button {...rest}>{title}</Button>
    </ThemeProvider>
  );

describe('Button Atom', () => {
  it('Should render Button Component', () => {
    const { getByText } = renderComponent({ theme: defaultTheme, title: 'Test' });

    expect(getByText('Test')).toBeInTheDocument();
  });
});
