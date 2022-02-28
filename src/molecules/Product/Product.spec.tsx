import { render, RenderResult } from '@testing-library/react';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { IRoute } from 'routes/data';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { IProduct, Product } from '.';

const renderComponent = ({ ...rest }: IProduct): RenderResult =>
  render(
    <ThemeProvider theme={defaultTheme}>
      <Product {...rest} />
    </ThemeProvider>
  );

describe('Product Molecule', () => {
  const imgUrl = 'image_url';
  const imgName = 'Image';
  it('Should render Product', () => {
    const { getByAltText, getByText, debug } = renderComponent({ img: imgUrl, name: imgName });

    debug();
    expect(getByText(imgName)).toBeInTheDocument();
    expect(getByAltText(imgName)).toHaveAttribute('src', imgUrl);
  });
  it('Should render Product with price currency', () => {
    const price = 20;
    const { getByText } = renderComponent({ img: imgUrl, name: imgName, price });

    expect(getByText('R$ 20,00')).toBeInTheDocument();
  });
});
