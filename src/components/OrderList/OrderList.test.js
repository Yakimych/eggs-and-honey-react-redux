// https://stackoverflow.com/questions/35898251/whats-the-right-way-to-write-jest-tests-verified-with-flow
// npm install -g flow-typed
// flow-typed install jest@22.x.x

// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import OrderList from './OrderList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const fakeOrders = [];
  ReactDOM.render(<OrderList displayOrders={fakeOrders} action={() => {}} columns={[]} />, div);
});
