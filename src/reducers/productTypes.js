// @flow
import type { ProductTypesState } from '../types/GlobalState';
import { SET_PRODUCT_TYPES } from '../actions/productTypes';
import type { SetProductTypesAction } from '../actions/productTypes';

type Action =
  | SetProductTypesAction;

const initialState: ProductTypesState = { productTypes: [], selectedProduct: null };

const productTypes = (state: ProductTypesState = initialState, action: Action): ProductTypesState => {
  switch (action.type) {
    case SET_PRODUCT_TYPES:
      return Object.assign({}, state, { productTypes: action.productTypes });
    default:
      return state;
  }
};

export default productTypes;