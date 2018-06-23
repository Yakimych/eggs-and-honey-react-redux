// @flow
import productTypes from './productTypes';
import { combineReducers } from 'redux';

export default combineReducers({ productTypeState: productTypes });