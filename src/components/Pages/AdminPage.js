// @flow
import type { AdminPageProps } from '../../types/AdminPageTypes';
import React from 'react';
import { connect } from 'react-redux';
import AdminOrderListContainer from '../OrderListContainers/AdminOrderListContainer';
import OrderHistory from '../OrderListContainers/OrderHistoryContainer';
import { fetchOrders, fetchOrderHistory } from '../../actions/orders';
import { fetchProductTypes } from '../../actions/productTypes';
import './AdminPage.css';

let columns = [
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

let historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

class AdminPage extends React.Component<AdminPageProps> {
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchOrderHistory();
    this.props.fetchProductTypes();
  }

  handleOrderResolutionChanged = () => {
    this.props.fetchOrders();
    this.props.fetchOrderHistory();
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow admin-page-container">
        <h3>Admin View</h3>
        <AdminOrderListContainer
          columns={columns}
          onOrderResolved={this.handleOrderResolutionChanged} />
        <OrderHistory
          columns={historyColumns}
          onOrderUnresolved={this.handleOrderResolutionChanged} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchOrderHistory: () => dispatch(fetchOrderHistory()),
    fetchProductTypes: () => dispatch(fetchProductTypes()) // TODO: Does flow check this? Removing doesn't cause an error
  });

export default connect(null, mapDispatchToProps)(AdminPage);
