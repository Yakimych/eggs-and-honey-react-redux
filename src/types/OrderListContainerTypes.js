// @flow
// import type { Dispatch } from 'redux';
import type { OrderListColumn } from './OrderListTypes';
import type { DisplayOrder, ProductType } from './OrderTypes';

// // TODO: Make this into a DU
// type ActionType = {
//   type: string,
//   payload: any
// }

type OrderListContainerProps = {
  columns: Array<OrderListColumn>,
  setProductTypes: (productTypes: any) => void
}

type OrderListContainerState = {
  filteredOrders: Array<DisplayOrder>,
  productTypes: Array<ProductType>
}

export type { OrderListContainerProps, OrderListContainerState };
