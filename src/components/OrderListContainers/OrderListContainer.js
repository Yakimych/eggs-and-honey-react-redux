// @flow
import type { Order, DisplayOrder, ProductType } from '../../types/OrderTypes';
import type { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFetchProductTypesSuccessAction } from '../../actions/productTypes';
import type { GlobalState } from '../../types/GlobalState';
import { getFilteredOrders } from '../../reducers/orders';

class OrderListContainer extends React.Component<OrderListContainerProps> {
  onAddOrder = (name: string, productType: ProductType) => {
    // TODO: Add unfiltered orders and search through them?
    let existingOrders = this.props.filteredOrders.filter((o) => o.name === name && o.productType === productType);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      // TODO: Dispatch action to add order
      // OrderService.addOrder(name, productType)
      //   .then((addedOrderId: number) => {
      //     this.orders = this.orders.concat({ id: addedOrderId, name: name, productType: productType }); 
      //     this.updateFilteredOrders(productType);
      //   })
      //   .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({ id: order.id, name: order.name, productType: order.productType });

  render() {
    return (
      <div>
        <OrderList
          columns={this.props.columns}
          displayOrders={this.props.filteredOrders.map(this.toDisplayOrder)} />
        <AddOrder onAddOrder={this.onAddOrder} />
      </div>
    );
  }
}

OrderListContainer.propTypes = {
  columns: PropTypes.array.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({
    // selectedProductType: getSelectedProduct(state),
    filteredOrders: getFilteredOrders(state),
  });

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ setProductTypes: (productTypes) => dispatch(createFetchProductTypesSuccessAction(productTypes)) });

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
