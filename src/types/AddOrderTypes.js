// @flow
import type { ProductType } from './OrderTypes.js';

type AddOrderProps = {
  onAddOrder: (name: string, product: ProductType) => void,
  activeProductTypeChanged: (name: ?ProductType) => void
}

type AddOrderState = {
  name: string,
  productType: ?ProductType
}

export type { AddOrderProps, AddOrderState };
