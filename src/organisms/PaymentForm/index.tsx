import { useWindowSize } from 'hooks/useWindowSize';
import { InputForm } from 'molecules/InputForm';
import { useMemo, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import CreditCard, { Focused } from 'react-credit-cards';
import { Title, Wrapper, InputsWrapper } from './styles';
import 'react-credit-cards/es/styles-compiled.css';

export interface ProductsListProps {
  title: string;
}
export function PaymentForm({ title }: ProductsListProps) {
  const { width } = useWindowSize();
  const biggerThanMd = useMemo(() => !!width && width > 1200, [width]);
  const [focusedField, setFocusedField] = useState<Focused>('number');
  const { watch } = useFormContext();

  const { cvv, cardHolder, cardNumber, cardValidity } = watch();

  const cardNumberWithoutPoints = useMemo(() => cardNumber?.replaceAll('.', ''), [cardNumber]);

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
            onFocus={() => setFocusedField('number')}
          />
          <InputForm
            className="formitem"
            label="Nome do Titular"
            placeholder="Como no cartão"
            name="cardHolder"
            onFocus={() => setFocusedField('name')}
          />
          <InputForm
            label="Validade(mes/ano):"
            placeholder="__/____"
            mask="99/9999"
            name="cardValidity"
            onFocus={() => setFocusedField('expiry')}
          />
          <InputForm
            label="CVV:"
            placeholder="___"
            mask="999"
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
            number={cardNumberWithoutPoints!}
          />
        )}
      </Wrapper>
    </div>
  );
}
