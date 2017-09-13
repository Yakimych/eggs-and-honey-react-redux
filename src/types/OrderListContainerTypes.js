// @flow
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder, ProductType } from './OrderTypes';

type OrderListContainerProps = {
  columns: Array<OrderListColumn>
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>,
  productTypes: Array<ProductType>
}

export type { OrderListContainerProps, OrderListContainerState };
