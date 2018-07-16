import type { ResolvedOrder } from '../../types/OrderTypes';

type AdminPageProps = {
  fetchOrders: () => void,
  fetchProductTypes: () => void
}

// TODO: Move to props
type AdminPageState = {
  resolvedOrders: Array<ResolvedOrder>
}

export type { AdminPageProps, AdminPageState };
