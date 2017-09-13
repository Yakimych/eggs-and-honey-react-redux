// @flow
import type { DisplayOrder } from './OrderTypes';
type OrderListColumn = {
  name: string,
  label: string
}

type OrderListProps = {
  action?: (id: number) => void,
  actionLabel?: string,
  displayOrders: Array<DisplayOrder>,
  columns: Array<OrderListColumn>
}

export type { OrderListColumn, OrderListProps };
