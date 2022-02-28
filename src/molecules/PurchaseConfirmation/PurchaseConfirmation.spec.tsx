import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { PurchseConfirmation } from '.';

const renderComponent = (): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <PurchseConfirmation />
    </ThemeProvider>
  );

describe('Purchase Confirmation Molecule', () => {
  it('Should render Purchase Confirmation', () => {
    const { getByText } = renderComponent();

    expect(getByText('Compra efetuada com sucesso')).toBeInTheDocument();
  });
});
