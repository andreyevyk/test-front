import { toCurrency } from 'utils/toCurrency';
import { Wrapper, Title, Price } from './styles';

export interface IProduct {
  name: string;
  img: string;
  price?: number;
}

export function Product({ name, img, price }: IProduct) {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div>
        <Title>{name}</Title>
        <Price>{toCurrency(price)}</Price>
      </div>
    </Wrapper>
  );
}
