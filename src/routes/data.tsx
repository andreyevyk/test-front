import React from 'react'

const Cart = React.lazy(() => import('../pages/Cart'))
const Payment = React.lazy(() => import('../pages/Payment'))

export interface IRoute {
  path: string;
  title: string;
  element: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    title: 'Sacola',
    element: Cart
  },
  {
    path: '/payment',
    title: 'Pagamento',
    element: Payment
  },
  {
    path: '/confirmation',
    title: 'Confirmação',
    element: Cart
  }
]
