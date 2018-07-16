// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder } from './OrderTypes';

type UserPageProps = {
  columns: Array<OrderListColumn>,
  filteredOrders: Array<DisplayOrder>,
  fetchOrders: () => void,
  fetchProductTypes: () => void
};

export type { UserPageProps };