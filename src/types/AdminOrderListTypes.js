// @flow
import type { ProductType, Order } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  orders: Array<Order>,
  filteredOrders: Array<Order>,
  selectedProductType: ?ProductType,
  onOrderResolved: (order: Order) => void
}

export type { AdminOrderListProps };
