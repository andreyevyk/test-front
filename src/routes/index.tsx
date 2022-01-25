import { Navbar } from 'molecules/Navbar';
import React from 'react';
import { BrowserRouter, Route, Routes as RouterRoutes } from 'react-router-dom';
import { routes } from './data';

export function Routes() {
  return (
    <BrowserRouter>
      <RouterRoutes>
        {routes.map(({ path, element: Element }) => {
          return (
            <Route
              key={path}
              path={path}
              element={
                <React.Suspense fallback={<>Carregando...</>}>
                  <Navbar routes={routes} path={path} />
                  <Element />
                </React.Suspense>
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
        {/* <Route path="*" component={NotFound} /> */}
      </RouterRoutes>
    </BrowserRouter>
  );
}

export default Routes;
