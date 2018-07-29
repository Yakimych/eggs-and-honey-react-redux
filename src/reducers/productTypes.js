// @flow
import type { ProductTypesState } from '../types/GlobalState';
import type { FetchProductTypesSuccessAction, SelectProductTypeAction } from '../actions/productTypes';
import type { GlobalState } from '../types/GlobalState';
import { FETCH_PRODUCT_TYPES_SUCCESS, SELECT_PRODUCT_TYPE } from '../actions/productTypes';

type Action =
  | FetchProductTypesSuccessAction
  | SelectProductTypeAction;

const initialState: ProductTypesState = { productTypes: [], selectedProduct: null };

const productTypes = (state: ProductTypesState = initialState, action: Action): ProductTypesState => {
  switch (action.type) {
    case FETCH_PRODUCT_TYPES_SUCCESS:
      return { ...state, productTypes: action.productTypes };
    case SELECT_PRODUCT_TYPE:
      return { ...state, selectedProduct: action.productType }; 
    default:
      return state;
  }
};

export const getProductTypes = (state: GlobalState) => state.productTypeState.productTypes;
export const getSelectedProduct = (state: GlobalState) => state.productTypeState.selectedProduct;

export default productTypes;