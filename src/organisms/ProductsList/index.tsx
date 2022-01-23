import { IProduct, Product } from 'molecules/Product'
import { Title, Wrapper } from './styles'

interface ProductsListProps {
  title: string;
  products: IProduct[];
}
export function ProductsList({ title, products }: ProductsListProps) {
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper>
        {products.map((product) => (
          <Product img={product.img} name={product.name} price={product.price} />
        ))}
      </Wrapper>
    </div>
  )
}
