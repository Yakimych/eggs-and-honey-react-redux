// @flow
import type { ProductType } from '../types/orderTypes';
import { SET_PRODUCT_TYPES } from '../actions/productTypes';
import type { SetProductTypesAction } from '../actions/productTypes';

type State = {
  +productTypes: Array<ProductType>,
  +selectedProduct: ?ProductType
}

type Action =
  | SetProductTypesAction;

const initialState: State = { productTypes: [], selectedProduct: null };

const productTypes = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_PRODUCT_TYPES:
      return Object.assign({}, state, { productTypes: action.productTypes });
    default:
      return state;
  }
};

export default productTypes;