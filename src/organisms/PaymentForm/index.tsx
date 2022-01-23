// import { IProduct, Product } from 'molecules/Product'
import { Title, Wrapper } from './styles'

interface ProductsListProps {
  title: string;
}
export function PaymentForm({ title }: ProductsListProps) {
  return (
    <div>
      <Title>{title}</Title>
      <Wrapper />
    </div>
  )
}
