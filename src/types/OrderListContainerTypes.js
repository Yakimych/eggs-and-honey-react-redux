// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { Order, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>,
  setProductTypes: (productTypes: Array<ProductType>) => void,
  filteredOrders: Array<Order>
}

export type { OrderListContainerProps };
