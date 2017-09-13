// @flow
import type { DisplayOrder } from '../../types/OrderTypes';
import React from 'react';
import ReactDOM from 'react-dom';
import OrderRow from './OrderRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const displayOrder: DisplayOrder = { id: 1, name: 'TestName', productType: 'Eggs' };
  ReactDOM.render(<OrderRow displayOrder={displayOrder} />, div);
});
