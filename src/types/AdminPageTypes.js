import type { Order, ResolvedOrder } from '../../types/OrderTypes';

type AdminPageState = {
  orders: Array<Order>,
  resolvedOrders: Array<ResolvedOrder>
}

export type { AdminPageState };
