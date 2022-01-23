import { Wrapper, Title, Price } from './styles'

export interface IProduct {
  price: string;
  name: string;
  img: string;
}

export function Product({ name, img, price }: IProduct) {
  return (
    <Wrapper>
      <img src={img} alt={name} />
      <div>
        <Title>{name}</Title>
        <Price>{price}</Price>
      </div>
    </Wrapper>
  )
}
