export const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';
export const createSetProductTypesAction = (productTypes) => 
  ({ type: SET_PRODUCT_TYPES, payload: productTypes });