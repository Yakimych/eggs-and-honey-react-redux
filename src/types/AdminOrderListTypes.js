// @flow
import type { ProductType, Order } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  orders: Array<Order>,
  onOrderResolved: (order: Order) => void
}

type AdminOrderListState = {
  filteredOrders: Array<Order>,
  selectedProductType: ?ProductType
}

export type { AdminOrderListProps, AdminOrderListState };
