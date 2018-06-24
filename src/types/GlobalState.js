// @flow
import type { ProductType } from './OrderTypes';

type ProductTypesState = {
  +productTypes: Array<ProductType>,
  +selectedProduct: ?ProductType
}

type GlobalState = {
  productTypeState: ProductTypesState
};

export type { ProductTypesState, GlobalState };