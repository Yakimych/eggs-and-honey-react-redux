// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { Order, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>,
  addOrder: (name: string, productType: ProductType) => void,
  filteredOrders: Array<Order>
}

export type { OrderListContainerProps };
