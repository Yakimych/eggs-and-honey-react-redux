// @flow
import type { Order, DisplayOrder } from '../../types/OrderTypes';
import type { AdminOrderListProps } from '../../types/AdminOrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import type { GlobalState } from '../../types/GlobalState';
import { getSelectedProduct } from '../../reducers/productTypes';
import { getFilteredOrders } from '../../reducers/orders';
import { resolveOrder } from '../../actions/orders';

class AdminOrderListContainer extends React.Component<AdminOrderListProps> {
  resolveOrder = (orderId: number) => {
    this.props.resolveOrder(orderId);
  }

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
  orders: PropTypes.array.isRequired,
  onOrderResolved: PropTypes.func.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({
    selectedProductType: getSelectedProduct(state),
    filteredOrders: getFilteredOrders(state),
  });

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ resolveOrder: (orderId) => dispatch(resolveOrder(orderId)) });

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderListContainer);
