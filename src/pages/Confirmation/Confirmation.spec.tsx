import { render, RenderResult, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { cartMocked } from 'test/mocks';
import Confirmation from '.';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Confirmation />
    </ThemeProvider>
  );

const payment = {
  cardNumber: 'cardNumber',
  cardHolder: 'cardHolder',
  cardValidity: 'cardValidity'
};

describe('Confirmation Page', () => {
  beforeEach(() => {
    window.localStorage.setItem('cartData', JSON.stringify(cartMocked));
    window.localStorage.setItem('paymentData', JSON.stringify(payment));
  });
  it('Should render Confirmation Page', () => {
    renderComponent();

    expect(screen.getByText('Compra efetuada com sucesso')).toBeInTheDocument();
  });
  it('list Items from storage', () => {
    renderComponent();

    expect(
      screen.getByAltText('Good Girl Carolina Herrera Eau de Parfum - Perfume Feminino 30ml')
    ).toBeInTheDocument();
    expect(screen.getByText('R$ 5,30')).toBeInTheDocument();
    expect(screen.getByText('- R$ 30,00')).toBeInTheDocument();
    expect(screen.getByText('R$ 624,80')).toBeInTheDocument();
    expect(screen.getByText('R$ 618,90')).toBeInTheDocument();
  });
});
