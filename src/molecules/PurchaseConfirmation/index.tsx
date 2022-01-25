import { FiCheckCircle } from 'react-icons/fi';
import { Wrapper } from './styles';

export function PurchseConfirmation() {
  return (
    <Wrapper>
      <FiCheckCircle />
      <span>Compra efetuada com sucesso</span>
    </Wrapper>
  );
}
