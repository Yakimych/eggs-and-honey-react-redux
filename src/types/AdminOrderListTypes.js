// @flow
import type { Order } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type AdminOrderListProps = {
  columns: Array<OrderListColumn>,
  filteredOrders: Array<Order>,
  resolveOrder: (orderId: number) => void
}

export type { AdminOrderListProps };
