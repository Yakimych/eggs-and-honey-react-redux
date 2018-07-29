// @flow
import type { FetchOrdersSuccessAction, FetchOrderHistorySuccessAction, AddOrderSuccessAction } from '../actions/orders';
import type { GlobalState, OrdersState } from '../types/GlobalState';
import { FETCH_ORDERS_SUCCESS, FETCH_ORDER_HISTORY_SUCCESS, ADD_ORDER_SUCCESS } from '../actions/orders';

type Action =
  | AddOrderSuccessAction
  | FetchOrderHistorySuccessAction
  | FetchOrdersSuccessAction;

const initialState: OrdersState = { orders: [], resolvedOrders: [] };

const orders = (state: OrdersState = initialState, action: Action): OrdersState => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return { ...state, orders: action.orders };
    case FETCH_ORDER_HISTORY_SUCCESS:
      return { ...state, resolvedOrders: action.resolvedOrders };
    case ADD_ORDER_SUCCESS:
    {
      const newOrder =
        {
          id: action.addedOrderId,
          name: action.addedOrderName,
          productType: action.addedProductType,
          datePlaced: new Date()
        };
      return { ...state, orders: [...state.orders, newOrder] };
    }
    default:
      return state;
  }
};

export const getResolvedOrders = (state: GlobalState) =>
  state.ordersState.resolvedOrders;

export const getFilteredOrders = (state: GlobalState) => {
  const filteredOrders =
    !state.productTypeState.selectedProduct
      ? state.ordersState.orders
      : state.ordersState.orders.filter((order) => order.productType === state.productTypeState.selectedProduct);
  return filteredOrders;
};

export default orders;
