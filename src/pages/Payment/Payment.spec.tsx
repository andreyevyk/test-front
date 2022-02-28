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
});
