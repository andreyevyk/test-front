import { IProduct } from 'molecules/Product'

export interface CartAPI {
  items: {
    quantity: number,
    product: {
      name: string,
      imageObjects: {
        small: string
      }[],
      priceSpecification: {
        price: 225.9
      }
    }
  }[];
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
}
export interface ICart {
  items: IProduct[];
  subTotal: string;
  shippingTotal: string;
  discount: string;
  total: string;
}
