/* eslint-disable prettier/prettier */
import { Button } from 'atoms/Button'
import { useNavigate } from 'react-router-dom'
import { ProductsList } from 'organisms/ProductsList'
import { useEffect, useState } from 'react'
import { IProducts } from 'organisms/ProductsList/types'
import { Container } from './styles'

export interface ICart {
  items: IProducts[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}


function Cart() {
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<ICart>({} as ICart);

  function goToPayment(){
    localStorage.setItem("cart", JSON.stringify(cartData));
    navigate("/payment")
  }

  useEffect(() => {
    fetch('http://www.mocky.io/v2/5b15c4923100004a006f3c07')
        .then((response) => response.json())
        .then(response => setCartData(response))
  }, [])

  return (
    <Container>
      <ProductsList title="Produtos" products={cartData.items} />

      {/* <PriceSummary
        subTotal={cartData.subTotal}
        shippingTotal={cartData.shippingTotal}
        descount={cartData.subTotal}
        total={cartData.total}
      /> */}

      <Button onClick={ () => goToPayment()}>Seguir para pagamento</Button>
    </Container>
  )
}

export default Cart
