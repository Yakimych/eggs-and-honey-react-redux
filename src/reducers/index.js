// @flow
import type { Reducer } from 'redux';
import type { GlobalState } from '../types/GlobalState';
import { combineReducers } from 'redux';
import productTypes from './productTypes';
import orders from './orders';

// TODO: any?
const combinedReducers: Reducer<GlobalState, any> =
  combineReducers({ productTypeState: productTypes, ordersState: orders });

export default combinedReducers;