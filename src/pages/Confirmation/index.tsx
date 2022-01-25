import { PurchseConfirmation } from 'molecules/PurchaseConfirmation';
import { IPayment, PaymentSummary } from 'organisms/PaymentSummary';
import { PriceSummary } from 'organisms/PriceSummary';
import { ProductsList } from 'organisms/ProductsList';
import { ICart } from 'pages/Cart';
import { useEffect, useState } from 'react';
import { Layout } from 'templates/Layout';

function Confirmation() {
  const [cartData, setCartData] = useState<ICart>({} as ICart);
  const [paymentData, setPaymentData] = useState<IPayment>({} as IPayment);

  useEffect(() => {
    const cart = localStorage.getItem('cartData');
    const payment = localStorage.getItem('paymentData');
    if (cart && payment) {
      const parsedCart = JSON.parse(cart);
      const parsedPayment = JSON.parse(payment);
      setCartData(parsedCart);
      setPaymentData(parsedPayment);
    }
  }, []);

  return (
    <Layout>
      <PurchseConfirmation />
      <ProductsList title="Produtos" products={cartData.items} showValues={false} />
      <PaymentSummary payment={paymentData} title="Pagamento" />
      <PriceSummary
        shippingTotal={cartData.shippingTotal}
        subTotal={cartData.subTotal}
        total={cartData.total}
        discount={cartData.discount}
      />
    </Layout>
  );
}

export default Confirmation;
