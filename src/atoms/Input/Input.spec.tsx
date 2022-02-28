import { render, RenderResult } from '@testing-library/react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Input, InputProps } from '.';

interface IRenderComoponent extends InputProps {
  theme: DefaultTheme;
}

const renderComponent = ({ theme, ...rest }: IRenderComoponent): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <Input {...rest} />
    </ThemeProvider>
  );

describe('Input Atom', () => {
  it('Should render correctly', () => {
    const { getByText } = renderComponent({ theme: defaultTheme, label: 'Test' });

    expect(getByText('Test')).toBeInTheDocument();
  });

  it('shows error input message', () => {
    const { getByText } = renderComponent({
      theme: defaultTheme,
      label: 'Test',
      error: 'value invalid'
    });

    expect(getByText('value invalid')).toHaveClass('error');
  });
});
