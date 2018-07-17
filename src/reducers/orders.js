// @flow
import { FETCH_ORDERS_SUCCESS, ADD_ORDER_SUCCESS } from '../actions/orders';
import type { FetchOrdersSuccessAction } from '../actions/orders';
import type { GlobalState, OrdersState } from '../types/GlobalState';

type Action =
  | FetchOrdersSuccessAction;

const initialState: OrdersState = { orders: [] };

const orders = (state: OrdersState = initialState, action: Action): OrdersState => {
  switch (action.type) {
    case FETCH_ORDERS_SUCCESS:
      return Object.assign({}, state, { orders: action.orders });
    case ADD_ORDER_SUCCESS:
    {
      const newOrder =
        {
          id: action.addedOrderId,
          name: action.addedOrderName,
          productType: action.addedProductType,
          datePlaced: new Date()
        };
      return Object.assign({}, state, { orders: [...state.orders, newOrder] });
    }
    default:
      return state;
  }
};

export const getFilteredOrders = (state: GlobalState) => {
  const filteredOrders =
    !state.productTypeState.selectedProduct
      ? state.ordersState.orders
      : state.ordersState.orders.filter((order) => order.productType === state.productTypeState.selectedProduct);
  return filteredOrders;
};

export default orders;
