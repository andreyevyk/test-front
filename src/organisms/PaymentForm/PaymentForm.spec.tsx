import { render, RenderResult, fireEvent, screen } from '@testing-library/react';
import { FormProvider, useForm } from 'react-hook-form';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { PaymentForm, ProductsListProps } from '.';

const renderComponent = (props: ProductsListProps): RenderResult => {
  function WrapperForm({ children }: any) {
    const methods = useForm();
    return <FormProvider {...methods}>{children}</FormProvider>;
  }
  return render(
    <ThemeProvider theme={defaultTheme}>
      <WrapperForm>
        <PaymentForm {...props} />
      </WrapperForm>
    </ThemeProvider>
  );
};

describe('PaymentForm organism', () => {
  it('Should render Payment Form', () => {
    renderComponent({ title: 'test' });

    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('Should render all inputs', () => {
    renderComponent({ title: 'test' });

    const cardNumber = screen.getByLabelText('Número do cartão');
    const cardHolder = screen.getByLabelText('Nome do Titular');
    const cardValidity = screen.getByLabelText('Validade(mes/ano):');
    const cvv = screen.getByLabelText('CVV:');

    expect(cardNumber).toBeInTheDocument();
    expect(cardHolder).toBeInTheDocument();
    expect(cardValidity).toBeInTheDocument();
    expect(cvv).toBeInTheDocument();
  });

  it('Should render all inputs', () => {
    renderComponent({ title: 'test' });
    const cardNumber = screen.getByLabelText('Número do cartão');
    const cardHolder = screen.getByLabelText('Nome do Titular');
    const cardValidity = screen.getByLabelText('Validade(mes/ano):');
    const cvv = screen.getByLabelText('CVV:');

    fireEvent.focus(cardNumber);
    fireEvent.focus(cardHolder);
    fireEvent.focus(cardValidity);
    fireEvent.focus(cvv);
  });
});
