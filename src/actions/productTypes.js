// @flow
import type { ProductType } from '../types/OrderTypes';
import OrderService from '../services/OrderService';

export const FETCH_PRODUCT_TYPES = 'FETCH_PRODUCT_TYPES';
export const FETCH_PRODUCT_TYPES_ERROR = 'FETCH_PRODUCT_TYPES_ERROR';
export const FETCH_PRODUCT_TYPES_SUCCESS = 'FETCH_PRODUCT_TYPES_SUCCESS';
export const SELECT_PRODUCT_TYPE = 'SELECT_PRODUCT_TYPE';

export const fetchProductTypes = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: FETCH_PRODUCT_TYPES });

    OrderService
      .getProductTypes()
      .then((productTypes) => dispatch({ type: FETCH_PRODUCT_TYPES_SUCCESS, productTypes }))
      .catch((error) => dispatch({ type: FETCH_PRODUCT_TYPES_ERROR, error }));
  };

export type FetchProductTypesSuccessAction = {
  type: typeof FETCH_PRODUCT_TYPES_SUCCESS,
  productTypes: Array<ProductType>
};

export type SelectProductTypeAction = {
  type: typeof SELECT_PRODUCT_TYPE,
  productType: ?ProductType
};

export const createFetchProductTypesSuccessAction = (productTypes: Array<ProductType>): FetchProductTypesSuccessAction => 
  ({ type: FETCH_PRODUCT_TYPES_SUCCESS, productTypes });

export const selectProductTypeAction = (productType: ?ProductType): SelectProductTypeAction => 
  ({ type: SELECT_PRODUCT_TYPE, productType });