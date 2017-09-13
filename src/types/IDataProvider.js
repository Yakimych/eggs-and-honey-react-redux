// @flow
import type { ProductType, Order, ResolvedOrder } from '../Types/OrderTypes';

interface IDataProvider {
  getOrders(): Promise<Array<Order>>;
  getResolvedOrders (): Promise<Array<ResolvedOrder>>;
  addOrder(name: string, productType: ProductType): Promise<number>;
  resolveOrder(orderId: number): Promise<ResolvedOrder>;
  unresolveOrder(orderId: number): Promise<Order>;
}

export type { IDataProvider };
