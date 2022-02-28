import { render, RenderResult } from '@testing-library/react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { IRoute } from 'routes/data';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { Navbar, NavbarProps } from '.';

const renderComponent = ({ ...rest }: NavbarProps): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Navbar {...rest} />
    </ThemeProvider>
  );

describe('Navbar Molecule', () => {
  it('Should render Navbar with 2 routes', () => {
    const routes: IRoute[] = [
      { element: null, path: '/', title: 'Home' },
      { element: null, path: '/test', title: 'Test' }
    ];
    const { getAllByTestId } = renderComponent({ path: '/', routes });

    const navbarItem = getAllByTestId('navbar-item');

    expect(navbarItem).toHaveLength(2);
  });
});
