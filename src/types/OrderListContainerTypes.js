// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>,
  setProductTypes: (productTypes: Array<ProductType>) => void
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>
}

export type { OrderListContainerProps, OrderListContainerState };
