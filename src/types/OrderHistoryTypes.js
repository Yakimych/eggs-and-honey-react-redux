// @flow
import type { Order, ResolvedOrder } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type OrderHistoryProps = {
  columns: Array<OrderListColumn>,
  resolvedOrders: Array<ResolvedOrder>,
  onOrderUnresolved: (order: Order) => void
}

export type { OrderHistoryProps };
