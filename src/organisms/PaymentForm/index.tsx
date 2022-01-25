// import { IProduct, Product } from 'molecules/Product'
import { useWindowSize } from 'hooks/useWindowSize';
import { InputForm } from 'molecules/InputForm';
import { Inputs } from 'pages/Payment';
import { useMemo, useState } from 'react';
import { Control, useWatch } from 'react-hook-form';
import CreditCard, { Focused } from 'react-credit-cards';
import { Title, Wrapper, InputsWrapper } from './styles';
import 'react-credit-cards/es/styles-compiled.css';

interface ProductsListProps {
  title: string;
  formControl: Control<Inputs, object>;
}
// Colocar desenho cartão
export function PaymentForm({ title, formControl }: ProductsListProps) {
  const { width } = useWindowSize();
  const biggerThanMd = useMemo(() => !!width && width > 1200, [width]);
  const [focusedField, setFocusedField] = useState<Focused>('number');
  const { cvv, cardHolder, cardNumber, cardValidity } = useWatch({
    control: formControl,
    defaultValue: {
      cardHolder: '',
      cardNumber: '',
      cardValidity: '',
      cvv: ''
    }
  });
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper>
        <InputsWrapper>
          <InputForm
            className="formitem"
            label="Número do cartão"
            placeholder="____.____.____.____"
            mask="9999.9999.9999.9999"
            name="cardNumber"
            control={formControl}
            onFocus={() => setFocusedField('number')}
          />
          <InputForm
            className="formitem"
            label="Nome do Titular"
            placeholder="Como no cartão"
            control={formControl}
            name="cardHolder"
            onFocus={() => setFocusedField('name')}
          />
          <InputForm
            label="Validade(mes/ano):"
            placeholder="__/____"
            mask="99/9999"
            name="cardValidity"
            control={formControl}
            onFocus={() => setFocusedField('expiry')}
          />
          <InputForm
            label="CVV:"
            placeholder="___"
            mask="999"
            control={formControl}
            name="cvv"
            onFocus={() => setFocusedField('cvc')}
          />
        </InputsWrapper>
        {biggerThanMd && (
          <CreditCard
            cvc={cvv!}
            expiry={cardValidity!}
            focused={focusedField}
            placeholders={{
              name: 'Nome'
            }}
            locale={{ valid: 'mês ano' }}
            name={cardHolder!}
            number={cardNumber!}
          />
        )}
      </Wrapper>
    </div>
  );
}
