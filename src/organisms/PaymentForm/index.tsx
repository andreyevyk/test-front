// import { IProduct, Product } from 'molecules/Product'
import { InputForm } from 'molecules/InputForm';
import { Control, FieldValues } from 'react-hook-form';
import { Title, Wrapper } from './styles';

interface ProductsListProps {
  title: string;
  formControl: Control<FieldValues, object> | undefined;
}
export function PaymentForm({ title, formControl }: ProductsListProps) {
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper>
        <InputForm
          label="Número do cartão"
          placeholder="____.____.____.____"
          mask="9999.9999.9999.9999"
          name="cardNumber"
          control={formControl}
        />
        <InputForm
          label="Nome do Titular"
          placeholder="Como no cartão"
          control={formControl}
          name="cardHolder"
        />
        <footer>
          <InputForm
            label="Validade(mes/ano):"
            placeholder="__/____"
            mask="99/9999"
            name="cardValidity"
            control={formControl}
          />
          <InputForm label="CVV:" placeholder="___" mask="999" control={formControl} name="cvv" />
        </footer>
      </Wrapper>
    </div>
  );
}
