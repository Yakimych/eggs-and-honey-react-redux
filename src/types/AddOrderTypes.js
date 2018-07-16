// @flow
import type { ProductType } from './OrderTypes.js';

type AddOrderProps = {
  onAddOrder: (name: string, product: ProductType) => void,
  selectedProductType: ?ProductType
}

type AddOrderState = {
  name: string
}

export type { AddOrderProps, AddOrderState };
