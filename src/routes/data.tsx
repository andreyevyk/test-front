import { lazy } from 'react';

const Cart = lazy(() => import('../pages/Cart'));
const Payment = lazy(() => import('../pages/Payment'));
const Confirmation = lazy(() => import('../pages/Confirmation'));

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
    element: Confirmation
  }
];
