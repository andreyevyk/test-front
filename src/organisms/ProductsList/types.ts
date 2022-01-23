export interface IProduct {
  name: string;
  imageObjects: {
    small: string
  }[];
  priceSpecification: {
    price: number
  };
}

export interface IProducts {
  quantity: number;
  product: IProduct;
}
export interface ProductsListProps {
  title: string;
  products: IProducts[];
}
