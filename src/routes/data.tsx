import React from 'react'

const Home = React.lazy(() => import('../pages/Home'))

interface IRoute {
  path: string;
  element: any;
}

export const routes: IRoute[] = [
  {
    path: '/',
    element: Home
  }
]
