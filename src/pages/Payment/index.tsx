import { Button } from 'atoms/Button';
import { PaymentForm } from 'organisms/PaymentForm';
import { PriceSummary } from 'organisms/PriceSummary';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ICart } from 'pages/Cart';
import { useEffect, useState } from 'react';
import { Container } from './styles';

const schema = yup.object({
  // Validar se cartão é válido
  cardNumber: yup.string().required('Campo Obrigatório').length(19, 'Numero inserido incorreto'),
  cardHolder: yup.string().required('Campo Obrigatório'),
  cardValidity: yup.string().required('Campo Obrigatório').length(7, 'Digite a data corretamente'),
  cvv: yup
    .string()
    .required('Campo Obrigatório')
    .length(3, 'É necessário o preenchimento dos 3 digitos')
});

function Payment() {
  // eslint-disable-next-line prettier/prettier
  const [cartData, setCartData] = useState<ICart>({} as ICart);

  const {
    control,
    handleSubmit,
    formState: { isValid }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: any) => console.log(data);

  useEffect(() => {
    const cart = localStorage.getItem('cartData');
    if (cart) {
      const parsedCart = JSON.parse(cart);
      setCartData(parsedCart);
    }
  }, []);
  console.log(isValid);
  return (
    <Container>
      <PaymentForm formControl={control} title="Cartão de crédito" />
      <PriceSummary
        shippingTotal={cartData.shippingTotal}
        subTotal={cartData.subTotal}
        total={cartData.total}
        discount={cartData.discount}
      />
      <Button onClick={handleSubmit(onSubmit)}>Finalizar o pedido</Button>
    </Container>
  );
}

export default Payment;
