import { toCurrency } from 'utils/toCurrency'
import { Wrapper, Descount, TotalPrice } from './styles'

interface IPriceSummary {
  subTotal: number;
  shippingTotal: number;
  descount?: number;
  total: number;
}

export function PriceSummary({ subTotal, shippingTotal, descount, total }: IPriceSummary) {
  return (
    <Wrapper>
      <span className="summary-item">
        Produtos <span>{toCurrency(subTotal)}</span>
      </span>
      <span className="summary-item">
        Frete <span>{toCurrency(shippingTotal)}</span>
      </span>
      {descount && (
        <Descount className="summary-item">
          Descontos <span>- {toCurrency(descount)}</span>
        </Descount>
      )}
      <TotalPrice className="summary-item">
        TOTAL <span>{toCurrency(total)}</span>
      </TotalPrice>
    </Wrapper>
  )
}
