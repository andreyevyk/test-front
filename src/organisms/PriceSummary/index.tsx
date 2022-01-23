import { Wrapper, Descount, TotalPrice } from './styles'

interface IPriceSummary {
  subTotal: string;
  shippingTotal: string;
  descount?: string;
  total: string;
}

export function PriceSummary({ subTotal, shippingTotal, descount, total }: IPriceSummary) {
  return (
    <Wrapper>
      <span className="summary-item">
        Produtos <span>{subTotal}</span>
      </span>
      <span className="summary-item">
        Frete <span>{shippingTotal}</span>
      </span>
      {descount && (
        <Descount className="summary-item">
          Descontos <span>- {descount}</span>
        </Descount>
      )}
      <TotalPrice className="summary-item">
        TOTAL <span>{total}</span>
      </TotalPrice>
    </Wrapper>
  )
}
