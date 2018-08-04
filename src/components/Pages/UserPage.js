// @flow
import type { UserPageProps } from '../../types/UserPageTypes';
import type { OrderListColumn } from '../../types/OrderListTypes';
import type { ContextRouter } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderListContainer from '../OrderListContainers/OrderListContainer';
import { fetchOrders } from '../../actions/orders';
import { fetchProductTypes } from '../../actions/productTypes';
import './UserPage.css';

const columns: Array<OrderListColumn> = [
  { name: 'name', label: 'Name' },
  { name: 'order', label: 'Order' },
];

class UserPage extends React.Component<UserPageProps & ContextRouter> {
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchProductTypes();
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow user-page-container">
        <h3 className="border-bottom border-gray pb-2 mb-0">Orders</h3>
        <OrderListContainer columns={columns} />
      </div>
    );
  }
}

UserPage.propTypes = {
  fetchOrders: PropTypes.func.isRequired,
  fetchProductTypes: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchProductTypes: () => dispatch(fetchProductTypes())
  });

export default connect(null, mapDispatchToProps)(UserPage);
