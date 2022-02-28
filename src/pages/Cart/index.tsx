import { Button } from 'atoms/Button';
import { useNavigate } from 'react-router-dom';
import { ProductsList } from 'organisms/ProductsList';
import { useEffect, useState } from 'react';
import { IProducts } from 'organisms/ProductsList/types';
import { PriceSummary } from 'organisms/PriceSummary';
import { Layout } from 'templates/Layout';

export interface ICart {
  items: IProducts[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}

function Cart() {
  const [cartData, setCartData] = useState<ICart>({} as ICart);
  const navigate = useNavigate();

  function goToPayment() {
    localStorage.setItem('cartData', JSON.stringify(cartData));
    navigate('/payment');
  }
  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
      .then((response) => response.json())
      .then((response) => setCartData(response));
  }, []);

  return (
    <Layout>
      <ProductsList title="Produtos" products={cartData.items} />

      <PriceSummary
        subTotal={cartData.subTotal}
        shippingTotal={cartData.shippingTotal}
        discount={cartData.discount}
        total={cartData.total}
      />

      <Button onClick={() => goToPayment()}>Seguir para pagamento</Button>
    </Layout>
  );
}

export default Cart;
