// @flow
import type { OrderListColumn } from './OrderListTypes';

type UserPageProps = {
  columns: Array<OrderListColumn>,
  fetchOrders: () => void,
  fetchProductTypes: () => void
};

export type { UserPageProps };