/* eslint-disable prettier/prettier */
import { Button } from 'atoms/Button'
import { useNavigate } from 'react-router-dom'
import { PriceSummary } from 'organisms/PriceSummary'
import { ProductsList } from 'organisms/ProductsList'
import { useEffect, useState } from 'react'
import { toCurrency } from 'utils/toCurrency'
import { Container } from './styles'
import { CartAPI, ICart } from './types'



function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<ICart>({
    discount: "0",
    items: [],
    shippingTotal: '0',
    subTotal: '0',
    total: '0'
  });

  function goToPayment(){
    localStorage.setItem("cart",JSON.stringify(cartData));
    navigate("/payment")
  }

  useEffect(() => {
    async function getCartData(){
      const cart: CartAPI = await fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => response.json())

      const mountedCart = {
        discount: toCurrency(cart.discount),
        subTotal: toCurrency(cart.subTotal),
        total: toCurrency(cart.total),
        shippingTotal: toCurrency(cart.shippingTotal),
        items: cart.items.map(item => {
          const img =  item.product.imageObjects[0].small;
          const priceInReal = toCurrency(item.product.priceSpecification.price);

          return {
            name: item.product.name,
            img,
            price: priceInReal
          }
        })
      }
      setCartData(mountedCart)
    }
    getCartData()
  }, [])

  return (
    <Container>
      <ProductsList title="Produtos" products={cartData?.items} />

      <PriceSummary
        subTotal={cartData?.subTotal}
        shippingTotal={cartData?.shippingTotal}
        descount={cartData?.subTotal}
        total={cartData?.total}
      />

      <Button onClick={ () => goToPayment()}>Seguir para pagamento</Button>
    </Container>
  )
}

export default Cart
