import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { ProductsList } from '.';
import { IProducts, ProductsListProps } from './types';

const renderComponent = (props: ProductsListProps): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <ProductsList {...props} />
    </ThemeProvider>
  );

describe('ProductsList organism', () => {
  const products: IProducts[] = [
    {
      quantity: 1,
      product: {
        name: 'productTest',
        imageObjects: [
          {
            small: 'imageSmall'
          }
        ],
        priceSpecification: {
          price: 10
        }
      }
    }
  ];
  it('Should render Products List ', () => {
    const { getByText, getByAltText } = renderComponent({ title: 'test', products });

    expect(getByText('test')).toBeInTheDocument();
    expect(getByAltText('productTest')).toBeInTheDocument();
    expect(getByText('productTest')).toBeInTheDocument();
    expect(getByText('R$ 10,00')).toBeInTheDocument();
  });
  it('Should not shows price', () => {
    const { queryByText } = renderComponent({
      title: 'test',
      products,
      showValues: false
    });

    expect(queryByText('R$ 10,00')).not.toBeInTheDocument();
  });
});
