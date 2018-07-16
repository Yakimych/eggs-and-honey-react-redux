// @flow
import type { Order, DisplayOrder } from '../../types/OrderTypes';
import type { AdminOrderListProps } from '../../types/AdminOrderListTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import ProductSelector from '../ProductSelector/ProductSelector';
import OrderService from '../../services/OrderService';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFetchProductTypesSuccessAction } from '../../actions/productTypes';
import type { GlobalState } from '../../types/GlobalState';
import { getSelectedProduct } from '../../reducers/productTypes';
import { getFilteredOrders } from '../../reducers/orders';

class AdminOrderListContainer extends React.Component<AdminOrderListProps> {
  resolveOrder = (orderId: number) => {
    OrderService.resolveOrder(orderId).then((order) => this.props.onOrderResolved(order));
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
  ({
    setProductTypes: (productTypes) => dispatch(createFetchProductTypesSuccessAction(productTypes))
  });

export default connect(mapStateToProps, mapDispatchToProps)(AdminOrderListContainer);
