// @flow
import type { ProductType, Order, ResolvedOrder } from './OrderTypes';

type ProductTypesState = {
  +productTypes: Array<ProductType>,
  +selectedProduct: ?ProductType
}

type OrdersState = {
  orders: Array<Order>,
  // TODO: Split into separate chunk of state?
  resolvedOrders: Array<ResolvedOrder>
}

type GlobalState = {
  productTypeState: ProductTypesState,
  ordersState: OrdersState
};

export type { ProductTypesState, OrdersState, GlobalState };