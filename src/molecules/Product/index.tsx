import { toCurrency } from 'utils/toCurrency'
import { Wrapper, Title, Price } from './styles'

interface IProduct {
  price: number;
  name: string;
  img: string;
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
  )
}
