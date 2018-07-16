// @flow
import type { ProductType } from './OrderTypes';

type ProductSelectorProps = {
  products: Array<ProductType>,
  activeProductType: ?ProductType,
  selectProductType: (activeProductName: ?ProductType) => void
}

export type { ProductSelectorProps };