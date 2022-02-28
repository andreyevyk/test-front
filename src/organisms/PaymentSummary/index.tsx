import { Title, Wrapper, Container } from './styles';

export interface IPayment {
  cardNumber: string;
  cardHolder: string;
  cardValidity: string;
}

export interface PaymentSummaryProps {
  title: string;
  payment: IPayment;
}

export function PaymentSummary({ title, payment }: PaymentSummaryProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        <span>****.****.****.{payment.cardNumber}</span>
        <span>{payment.cardHolder}</span>
        <span>{payment.cardValidity}</span>
      </Wrapper>
    </Container>
  );
}
