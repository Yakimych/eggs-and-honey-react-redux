// @flow
import type { ProductType } from '../types/OrderTypes';

export const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';

export type SetProductTypesAction = {
  type: typeof SET_PRODUCT_TYPES,
  productTypes: Array<ProductType>
};

export const createSetProductTypesAction = (productTypes: Array<ProductType>): SetProductTypesAction => 
  ({ type: SET_PRODUCT_TYPES, productTypes: productTypes });