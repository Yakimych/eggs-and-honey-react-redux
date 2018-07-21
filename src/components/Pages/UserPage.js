// @flow
import type { UserPageProps } from '../../types/UserPageTypes';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderListContainer from '../OrderListContainers/OrderListContainer';
import { fetchOrders } from '../../actions/orders';
import { fetchProductTypes } from '../../actions/productTypes';
import './UserPage.css';

class UserPage extends React.Component<UserPageProps> {
  componentDidMount() {
    this.props.fetchOrders();
    this.props.fetchProductTypes();
  }

  render() {
    return (
      <div className="my-3 p-3 bg-white rounded box-shadow user-page-container">
        <h3 className="border-bottom border-gray pb-2 mb-0">Orders</h3>
        <OrderListContainer columns={this.props.columns} />
      </div>
    );
  }
}

UserPage.propTypes = {
  columns: PropTypes.array.isRequired,
  fetchOrders: PropTypes.func.isRequired,
  fetchProductTypes: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchProductTypes: () => dispatch(fetchProductTypes()) // TODO: Does flow check this? Removing doesn't cause an error
  });

export default connect(null, mapDispatchToProps)(UserPage);
