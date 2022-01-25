import { toCurrency } from 'utils/toCurrency';
import { Wrapper, Discount, TotalPrice } from './styles';

interface IPriceSummary {
  subTotal: number;
  shippingTotal: number;
  discount?: number;
  total: number;
}

export function PriceSummary({ subTotal, shippingTotal, discount, total }: IPriceSummary) {
  return (
    <Wrapper>
      <span className="summary-item">
        Produtos <span>{toCurrency(subTotal)}</span>
      </span>
      <span className="summary-item">
        Frete <span>{toCurrency(shippingTotal)}</span>
      </span>
      {!!discount && (
        <Discount className="summary-item">
          Descontos <span>- {toCurrency(discount)}</span>
        </Discount>
      )}
      <TotalPrice className="summary-item">
        TOTAL <span>{toCurrency(total)}</span>
      </TotalPrice>
    </Wrapper>
  );
}
