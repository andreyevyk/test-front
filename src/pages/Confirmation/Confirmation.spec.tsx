import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import Confirmation from '.';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Confirmation />
    </ThemeProvider>
  );

const cart = {
  items: [
    {
      quantity: 1,
      product: {
        name: 'productTest',
        imageObjects: [
          {
            small: 'imageSmall'
          }
        ],
        priceSpecification: {
          price: 10
        }
      }
    }
  ],
  shippingTotal: 10,
  subTotal: 20,
  discount: 10,
  total: 30
};

const payment = {
  cardNumber: 'cardNumber',
  cardHolder: 'cardHolder',
  cardValidity: 'cardValidity'
};

describe('Confirmation Page', () => {
  beforeEach(() => {
    window.localStorage.setItem('cartData', JSON.stringify(cart));
    window.localStorage.setItem('paymentData', JSON.stringify(payment));
  });
  it('Should render Confirmation Page', () => {
    const { getByText } = renderComponent();

    expect(getByText('Compra efetuada com sucesso')).toBeInTheDocument();
    expect(getByText('productTest')).toBeInTheDocument();
    expect(getByText('cardHolder')).toBeInTheDocument();
  });
});
