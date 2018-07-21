// @flow
import type { Order, ResolvedOrder, ProductType } from '../types/OrderTypes';
import OrderService from '../services/OrderService';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_ERROR = 'FETCH_ORDERS_ERROR';

export const FETCH_ORDER_HISTORY = 'FETCH_ORDER_HISTORY';
export const FETCH_ORDER_HISTORY_SUCCESS = 'FETCH_ORDER_HISTORY_SUCCESS';
export const FETCH_ORDER_HISTORY_ERROR = 'FETCH_ORDER_HISTORY_ERROR';

export const ADD_ORDER = 'ADD_ORDER';
export const ADD_ORDER_SUCCESS = 'ADD_ORDER_SUCCESS';
export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';

// TODO: Break out into resolvedOrders?
export const RESOLVE_ORDER = 'RESOLVE_ORDER';
export const RESOLVE_ORDER_SUCCESS = 'RESOLVE_ORDER_SUCCESS';
export const RESOLVE_ORDER_ERROR = 'RESOLVE_ORDER_ERROR';

export const UNRESOLVE_ORDER = 'UNRESOLVE_ORDER';
export const UNRESOLVE_ORDER_SUCCESS = 'UNRESOLVE_ORDER_SUCCESS';
export const UNRESOLVE_ORDER_ERROR = 'UNRESOLVE_ORDER_ERROR';

export type ResolveOrderSuccessAction = {
  type: typeof RESOLVE_ORDER_SUCCESS,
  resolvedOrder: ResolvedOrder
};

export type UnresolveOrderSuccessAction = {
  type: typeof UNRESOLVE_ORDER_SUCCESS,
  Order: Order
};

export type FetchOrdersSuccessAction = {
  type: typeof FETCH_ORDERS_SUCCESS,
  orders: Array<Order>
};

export type FetchOrderHistorySuccessAction = {
  type: typeof FETCH_ORDER_HISTORY_SUCCESS,
  resolvedOrders: Array<ResolvedOrder>
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

export const resolveOrder = (orderId: number) =>
  (dispatch: Dispatch) => {
    dispatch({ type: RESOLVE_ORDER });
    OrderService.resolveOrder(orderId)
      .then((resolvedOrder) => {
        dispatch({ type: RESOLVE_ORDER_SUCCESS, resolvedOrder });
        dispatch(fetchOrders());
        dispatch(fetchOrderHistory());
      })
      .catch((error) => dispatch({ type: RESOLVE_ORDER_ERROR, error }));
  };

export const unresolveOrder = (resolvedOrderId: number) =>
  (dispatch: Dispatch) => {
    dispatch({ type: UNRESOLVE_ORDER });
    OrderService
      .unresolveOrder(resolvedOrderId)
      .then((order) => {
        dispatch({ type: UNRESOLVE_ORDER_SUCCESS, order });
        dispatch(fetchOrders());
        dispatch(fetchOrderHistory());
      })
      .catch((error) => dispatch({ type: UNRESOLVE_ORDER_ERROR, error }));
  };

export const fetchOrders = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ORDERS });
    OrderService.getOrders()
      .then((orders) => dispatch({ type: FETCH_ORDERS_SUCCESS, orders }))
      .catch((error) => dispatch({ type: FETCH_ORDERS_ERROR, error }));
  };

export const fetchOrderHistory = () =>
  (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ORDER_HISTORY });
    OrderService.getOrderHistory()
      .then((resolvedOrders) => dispatch({ type: FETCH_ORDER_HISTORY_SUCCESS, resolvedOrders }))
      .catch((error) => dispatch({ type: FETCH_ORDER_HISTORY_ERROR, error }));
  };

export const addOrder = (name: string, productType: ProductType) =>
  (dispatch: Dispatch) => {
    dispatch({ type: ADD_ORDER });
    OrderService.addOrder(name, productType)
      .then((addedOrderId: number) => {
        dispatch({
          type: ADD_ORDER_SUCCESS,
          addedOrderName: name,
          addedProductType: productType,
          addedOrderId
        });
      })
      .catch((error) => dispatch({ type: ADD_ORDER_ERROR, error }));
  };

export const createFetchOrdersSuccessAction = (orders: Array<Order>): FetchOrdersSuccessAction => 
  ({ type: FETCH_ORDERS_SUCCESS, orders });