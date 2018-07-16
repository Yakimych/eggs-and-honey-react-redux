// @flow
import type { ProductType, Order } from './OrderTypes';

type ProductTypesState = {
  +productTypes: Array<ProductType>,
  +selectedProduct: ?ProductType
}

type OrdersState = {
  orders: Array<Order>
}

type GlobalState = {
  productTypeState: ProductTypesState,
  ordersState: OrdersState
};

export type { ProductTypesState, OrdersState, GlobalState };