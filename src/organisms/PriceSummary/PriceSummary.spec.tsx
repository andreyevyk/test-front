import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { IPriceSummary, PriceSummary } from '.';

const renderComponent = (props: IPriceSummary): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <PriceSummary {...props} />
    </ThemeProvider>
  );

describe('PriceSummary organism', () => {
  it('Should render Price Summary with prices currency', () => {
    const { getAllByText, getByText } = renderComponent({
      subTotal: 50,
      shippingTotal: 10,
      total: 50
    });

    expect(getAllByText('R$ 50,00')).toHaveLength(2);
    expect(getByText('R$ 10,00')).toBeInTheDocument();
  });
  it('Should render Price Summary with discount', () => {
    const { getByText } = renderComponent({
      subTotal: 50,
      shippingTotal: 10,
      discount: 10,
      total: 50
    });

    expect(getByText('Descontos')).toBeInTheDocument();
  });
});
