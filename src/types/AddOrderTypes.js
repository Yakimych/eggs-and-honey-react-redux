// @flow
import type { ProductType } from './OrderTypes.js';

type AddOrderProps = {
  productTypes: Array<ProductType>,
  onAddOrder: (name: string, product: ProductType) => void,
  activeProductTypeChanged: (name: ?ProductType) => void
}

type AddOrderState = {
  name: string,
  productType: ?ProductType
}

export type { AddOrderProps, AddOrderState };
