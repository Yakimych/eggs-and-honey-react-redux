// @flow
import type {
  ProductType,
  Order,
  ApiOrder,
  ResolvedOrder,
  ApiResolvedOrder,
  OrderItems,
  ResolvedOrderItems,
  ResultWithId
} from '../Types/OrderTypes';
import type { IDataProvider } from '../Types/IDataProvider';
import { toOrder, toResolvedOrder } from './ApiOrderMapping';
import axios from 'axios';
import type { $AxiosXHR } from 'axios';

const apiUrl = 'http://localhost:5000/api/v1/';
const getOrdersUrl = `${apiUrl}orders`;
const getResolvedOrdersUrl = `${apiUrl}resolvedorders`;
const addOrderUrl = `${apiUrl}orders`;
const resolveOrderUrl = `${apiUrl}orders/resolve`;
const unresolveOrderUrl = `${apiUrl}resolvedorders/unresolve`;

class DataProvider implements IDataProvider {
  getOrders = (): Promise<Array<Order>> =>
    axios
      .get(getOrdersUrl)
      .then((result: $AxiosXHR<OrderItems>) => result.data.items.map(toOrder));

  getResolvedOrders = (): Promise<Array<ResolvedOrder>> =>
    axios
      .get(getResolvedOrdersUrl)
      .then((result: $AxiosXHR<ResolvedOrderItems>) => result.data.items.map(toResolvedOrder));

  addOrder = (name: string, productType: ProductType): Promise<number> =>
    axios
      .post(addOrderUrl, { name: name, order: productType })
      .then((result: $AxiosXHR<ResultWithId>) => result.data.id);

  resolveOrder = (orderId: number): Promise<ResolvedOrder> =>
    axios
      .post(resolveOrderUrl, { id: orderId })
      .then((result: $AxiosXHR<ApiResolvedOrder>) => toResolvedOrder(result.data));

  unresolveOrder = (orderId: number): Promise<Order> =>
    axios
      .post(unresolveOrderUrl, { id: orderId })
      .then((result: $AxiosXHR<ApiOrder>) => toOrder(result.data));
}

export default new DataProvider();
