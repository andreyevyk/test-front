import React from 'react'

const Cart = React.lazy(() => import('../pages/Cart'))

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
    element: Cart
  },
  {
    path: '/confirmation',
    title: 'Confirmação',
    element: Cart
  }
]
