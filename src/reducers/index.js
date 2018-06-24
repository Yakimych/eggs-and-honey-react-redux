// @flow
import productTypes from './productTypes';
import { combineReducers } from 'redux';
import type { Reducer } from 'redux';
import type { GlobalState } from '../types/GlobalState';

const combinedReducers: Reducer<GlobalState, any> = combineReducers({ productTypeState: productTypes });

export default combinedReducers;