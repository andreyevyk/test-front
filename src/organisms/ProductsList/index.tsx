import { Product } from 'molecules/Product';
import { Title, Wrapper } from './styles';
import { ProductsListProps } from './types';

export function ProductsList({ title, products, showValues = true }: ProductsListProps) {
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper>
        {products?.map(({ product }) => (
          <Product
            key={product.name}
            img={product.imageObjects[0].small}
            name={product.name}
            price={showValues ? product.priceSpecification.price : undefined}
          />
        ))}
      </Wrapper>
    </div>
  );
}
