import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { PaymentSummary, PaymentSummaryProps } from '.';

const renderComponent = (props: PaymentSummaryProps): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <PaymentSummary {...props} />
    </ThemeProvider>
  );

describe('PaymentSummary organism', () => {
  it('Should render Payment Summary', () => {
    const payment = {
      cardNumber: '1234',
      cardHolder: '123',
      cardValidity: '123'
    };
    const { getByText } = renderComponent({ title: 'test', payment });

    expect(getByText('test')).toBeInTheDocument();
  });
});
