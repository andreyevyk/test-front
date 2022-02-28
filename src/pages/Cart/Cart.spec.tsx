import { render, RenderResult, fireEvent, waitFor, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import Cart from '.';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Cart />
    </ThemeProvider>
  );

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Cart Page', () => {
  it('render Cart Page', async () => {
    renderComponent();

    expect(screen.getByText('Frete')).toBeInTheDocument();
  });
  it('wait cart fetch', async () => {
    renderComponent();

    waitFor(() => {
      expect(
        screen.getByText('Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml')
      ).toBeInTheDocument();
    });
  });
  it('go to payment page', () => {
    const { getByText } = renderComponent();

    const button = getByText('Seguir para pagamento', { selector: 'button' });
    fireEvent.click(button);
    expect(mockNavigate).toHaveBeenCalledWith('/payment');
  });
});
