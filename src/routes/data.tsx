import React from 'react'

const Cart = React.lazy(() => import('../pages/Cart'))

interface IRoute {
  path: string;
  element: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    element: Cart
  }
]
