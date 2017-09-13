// @flow
import type { DisplayOrder } from './OrderTypes';

type OrderRowProps = {
  action?: () => void,
  actionLabel?: string,
  displayOrder: DisplayOrder
}

export type { OrderRowProps };
