import { render, RenderResult } from '@testing-library/react';
import { ButtonHTMLAttributes, HTMLAttributes } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { NavbarItem, NavbarItemProps } from './NavbarItem';

interface IRenderComoponent extends HTMLAttributes<HTMLSpanElement>, NavbarItemProps {
  theme: DefaultTheme;
}

const renderComponent = ({ theme, title, isActive, ...rest }: IRenderComoponent): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <NavbarItem isActive={isActive} {...rest}>
        {title}
      </NavbarItem>
      <span />
    </ThemeProvider>
  );

describe('NavbarItem Atom', () => {
  it('Should render NavbarItem Component active', () => {
    const { getByText } = renderComponent({
      theme: defaultTheme,
      title: 'Test',
      isActive: true
    });

    expect(getByText('Test')).toBeInTheDocument();
  });

  // Buscar como testar styled-component props
  it('Should render NavbarItem Component inactive', () => {
    const { getByText, debug } = renderComponent({
      theme: defaultTheme,
      title: 'Test',
      isActive: false
    });

    // debug();
    expect(getByText('Test')).toBeInTheDocument();
  });
});
