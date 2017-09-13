// @flow
import type { ProductType } from './OrderTypes';

type ProductSelectorProps = {
  products: Array<ProductType>,
  activeProductType: ?ProductType,
  onActiveChanged: (activeProductName: ?ProductType) => void
}

export type { ProductSelectorProps };