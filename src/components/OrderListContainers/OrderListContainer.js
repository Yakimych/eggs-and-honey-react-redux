// @flow
import type { Order, DisplayOrder, ProductType } from '../../types/OrderTypes';
import type { OrderListContainerProps } from '../../types/OrderListContainerTypes';
import type { GlobalState } from '../../types/GlobalState';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import { getFilteredOrders } from '../../reducers/orders';
import { addOrder } from '../../actions/orders';

class OrderListContainer extends React.Component<OrderListContainerProps> {
  onAddOrder = (name: string, productType: ProductType) => {
    const existingOrders =
      this.props.filteredOrders.filter((o) => o.name === name && o.productType === productType);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      this.props.addOrder(name, productType);
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
  columns: PropTypes.array.isRequired,
  filteredOrders: PropTypes.array.isRequired,
  addOrder: PropTypes.func.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({ filteredOrders: getFilteredOrders(state) });

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ addOrder: (name, productType) => dispatch(addOrder(name, productType)) });

export default connect(mapStateToProps, mapDispatchToProps)(OrderListContainer);
