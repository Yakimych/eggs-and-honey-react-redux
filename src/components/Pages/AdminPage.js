// @flow
import type { AdminPageState, AdminPageProps } from '../../types/AdminPageTypes';
import React from 'react';
import { connect } from 'react-redux';
import AdminOrderListContainer from '../OrderListContainers/AdminOrderListContainer';
import OrderService from '../../services/OrderService';
import OrderHistory from '../OrderListContainers/OrderHistoryContainer';
import { fetchOrders } from '../../actions/orders';
import { fetchProductTypes } from '../../actions/productTypes';
import './AdminPage.css';

let columns = [
  // TODO: Make name and order hardcoded in the list?
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
  { name: 'datePlaced', label: 'Date Placed' }
];

let historyColumns = columns.concat([ { name: 'dateResolved', label: 'Date Resolved' } ]);

class AdminPage extends React.Component<AdminPageProps, AdminPageState> {
  state = { orders: [], resolvedOrders: [] };

  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchProductTypes();
    this.getOrderHistory();
  }

  getOrderHistory = () => {
    OrderService.getOrderHistory()
      .then((resolvedOrders) => this.setState({ resolvedOrders: resolvedOrders }))
      .catch((error) => console.log(error));
  }

  handleOrderResolutionChanged = () => {
    this.props.fetchOrders();
    this.getOrderHistory();
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow admin-page-container">
        <h3>Admin View</h3>
        <AdminOrderListContainer
          columns={columns}
          orders={this.state.orders}
          onOrderResolved={this.handleOrderResolutionChanged} />
        <OrderHistory
          columns={historyColumns}
          resolvedOrders={this.state.resolvedOrders}
          onOrderUnresolved={this.handleOrderResolutionChanged} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchProductTypes: () => dispatch(fetchProductTypes()) // TODO: Does flow check this? Removing doesn't cause an error
  });

export default connect(null, mapDispatchToProps)(AdminPage);
