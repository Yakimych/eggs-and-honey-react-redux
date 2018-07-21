// @flow
import type { ResolvedOrder } from './OrderTypes';
import type { OrderListColumn } from './OrderListTypes';

type OrderHistoryProps = {
  columns: Array<OrderListColumn>,
  resolvedOrders: Array<ResolvedOrder>,
  // onOrderUnresolved: (order: Order) => void,
  unresolveOrder: (resolvedOrderId: number) => void
}

export type { OrderHistoryProps };
