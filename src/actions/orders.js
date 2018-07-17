// @flow
import type { Order, ProductType } from '../types/OrderTypes';
import OrderService from '../services/OrderService';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';

export type FetchOrdersSuccessAction = {
  type: typeof FETCH_ORDERS_SUCCESS,
  orders: Array<Order>
};

export type AddOrderAction = {
  type: typeof ADD_ORDER,
  name: string,
  productType: ProductType
};

export type AddOrderSuccessAction = {
  type: typeof ADD_ORDER_SUCCESS,
  addedOrderName: string,
  addedProductType: ProductType,
  addedOrderId: number
};

export const fetchOrders = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ORDERS });
    OrderService.getOrders()
      .then((orders) => dispatch({ type: FETCH_ORDERS_SUCCESS, orders }))
      .catch((error) => dispatch({ type: FETCH_ORDERS_ERROR, error }));
  };

export const addOrder = (name: string, productType: ProductType) =>
  (dispatch: Dispatch) => {
    dispatch({ type: ADD_ORDER });
    OrderService.addOrder(name, productType)
      .then((addedOrderId: number) => {
        dispatch({ type: ADD_ORDER_SUCCESS, addedOrderName: name, addedProductType: productType, addedOrderId });
      })
      .catch((error) => dispatch({ type: ADD_ORDER_ERROR, error }));
  };

export const createFetchOrdersSuccessAction = (orders: Array<Order>): FetchOrdersSuccessAction => 
  ({ type: FETCH_ORDERS_SUCCESS, orders });