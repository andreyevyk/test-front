import { render, RenderResult, screen, fireEvent, act } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { cartMocked } from 'test/mocks';
import Payment from '.';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Payment />
    </ThemeProvider>
  );

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Payment page', () => {
  beforeEach(() => {
    window.localStorage.setItem('cartData', JSON.stringify(cartMocked));
  });
  it('Should render Payment', () => {
    renderComponent();

    expect(screen.getByText('Cartão de crédito')).toBeInTheDocument();
  });
  it('show input errors after submit', async () => {
    renderComponent();

    const button = screen.getByText('Finalizar o pedido');

    await act(async () => {
      fireEvent.click(button);
    });

    expect(screen.queryAllByText('Campo Obrigatório')).toHaveLength(4);
  });
  it('disable the submit button if the fields had errors', async () => {
    renderComponent();
    const button = screen.getByText('Finalizar o pedido');
    await act(async () => {
      fireEvent.click(button);
    });

    expect(button).toBeDisabled();
  });
  it('enable the submit button if the fields are filled', async () => {
    renderComponent();
    const button = screen.getByText('Finalizar o pedido');
    const cardNumber = screen.getByLabelText('Número do cartão');
    const cardHolder = screen.getByLabelText('Nome do Titular');
    const cardValidity = screen.getByLabelText('Validade(mes/ano):');
    const cvv = screen.getByLabelText('CVV:');
    await act(async () => {
      fireEvent.click(button);
      fireEvent.change(cardNumber, { target: { value: '5388.6311.6349.9992' } });
      fireEvent.change(cardValidity, { target: { value: '04/2023' } });
      fireEvent.change(cardHolder, { target: { value: 'John Doe' } });
      fireEvent.change(cvv, { target: { value: '198' } });
    });
    expect(button).not.toBeDisabled();
  });
});
