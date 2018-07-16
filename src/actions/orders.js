// @flow
import type { Order } from '../types/OrderTypes';
import OrderService from '../services/OrderService';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

export type FetchOrdersSuccessAction = {
  type: typeof FETCH_ORDERS_SUCCESS,
  orders: Array<Order>
};

export const fetchOrders = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ORDERS });
    OrderService.getOrders()
      .then((orders) => dispatch({ type: FETCH_ORDERS_SUCCESS, orders }))
      .catch((error) => dispatch({ type: FETCH_ORDERS_ERROR, error }));
  };

export const createFetchOrdersSuccessAction = (orders: Array<Order>): FetchOrdersSuccessAction => 
  ({ type: FETCH_ORDERS_SUCCESS, orders });