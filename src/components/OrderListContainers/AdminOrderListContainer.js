// @flow
import type { Order, DisplayOrder } from '../../types/OrderTypes';
import type { AdminOrderListProps } from '../../types/AdminOrderListTypes';
import type { GlobalState } from '../../types/GlobalState';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedProduct } from '../../reducers/productTypes';
import { getFilteredOrders } from '../../reducers/orders';
import { resolveOrder } from '../../actions/orders';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';

class AdminOrderListContainer extends React.Component<AdminOrderListProps> {
  resolveOrder = (orderId: number) =>
    this.props.resolveOrder(orderId);

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv')
    });

  render() {
    return (
      <div>
        <ProductSelector />
        <OrderList
          action={this.resolveOrder}
          actionLabel={'Resolve'}
          columns={this.props.columns}
          displayOrders={this.props.filteredOrders.map(this.toDisplayOrder)} />
      </div>
    );
  }
}

AdminOrderListContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  filteredOrders: PropTypes.array.isRequired,
  resolveOrder: PropTypes.func.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({
    selectedProductType: getSelectedProduct(state),
    filteredOrders: getFilteredOrders(state),
  });

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ resolveOrder: (orderId) => dispatch(resolveOrder(orderId)) });

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderListContainer);
