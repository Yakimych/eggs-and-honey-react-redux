// @flow
import type { Reducer } from 'redux';
import { SET_PRODUCT_TYPES } from '../actions/productTypes';

const initialState: Object = { productTypes: [], selectedProductType: null };

const productTypes: Reducer<any, any> = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_TYPES:
      return Object.assign({}, state, { productTypes: action.payload });
    default:
      return state;
  }
};

export default productTypes;