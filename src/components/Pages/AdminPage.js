// @flow
import type { AdminPageProps } from '../../types/AdminPageTypes';
import type { OrderListColumn } from '../../types/OrderListTypes';
import type { ContextRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdminOrderListContainer from '../OrderListContainers/AdminOrderListContainer';
import OrderHistory from '../OrderListContainers/OrderHistoryContainer';
import { fetchOrders, fetchOrderHistory } from '../../actions/orders';
import { fetchProductTypes } from '../../actions/productTypes';
import './AdminPage.css';

const columns: Array<OrderListColumn> = [
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

const historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

class AdminPage extends React.Component<AdminPageProps & ContextRouter> {
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchOrderHistory();
    this.props.fetchProductTypes();
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow admin-page-container">
        <h3>Admin View</h3>
        <AdminOrderListContainer columns={columns} />
        <OrderHistory columns={historyColumns} />
      </div>
    );
  }
}

AdminPage.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  fetchOrderHistory: PropTypes.func.isRequired,
  fetchProductTypes: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchOrderHistory: () => dispatch(fetchOrderHistory()),
    fetchProductTypes: () => dispatch(fetchProductTypes())
  });

export default connect(null, mapDispatchToProps)(AdminPage);
