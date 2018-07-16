// @flow
import type { Order, DisplayOrder, ProductType } from '../../types/OrderTypes';
import type { OrderListContainerProps, OrderListContainerState } from '../../types/OrderListContainerTypes';
import React from 'react';
import OrderList from '../OrderList/OrderList';
import AddOrder from '../OrderList/AddOrder';
import OrderService from '../../services/OrderService';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createFetchProductTypesSuccessAction } from '../../actions/productTypes';

class OrderListContainer extends React.Component<OrderListContainerProps, OrderListContainerState> {
  orders: Array<DisplayOrder> = [];

  constructor(props: OrderListContainerProps) {
    super(props);
    this.state = {
      filteredOrders: []
    };
  }

  componentDidMount() {
    this.getOrders();
    this.getProductTypes();
  }

  getOrders = () => {
    OrderService.getOrders()
      .then((orders) => {
        this.orders = orders.map(this.toDisplayOrder);
        this.updateFilteredOrders();
      })
      .catch((error) => { console.log(error); });
  }

  getProductTypes = () => {
    OrderService.getProductTypes()
      .then((productTypes) => this.props.setProductTypes(productTypes))
      .catch((error) => { console.log(error); });
  }

  onAddOrder = (name: string, productType: ProductType) => {
    let existingOrders = this.orders.filter((o) => o.name === name && o.productType === productType);
    if (existingOrders.length > 0) {
      alert('Order already exists!');
    }
    else {
      OrderService.addOrder(name, productType)
        .then((addedOrderId: number) => {
          this.orders = this.orders.concat({ id: addedOrderId, name: name, productType: productType }); 
          this.updateFilteredOrders(productType);
        })
        .catch(() => alert('Failed to add order, please refresh the page and try again'));
    }
  }

  updateFilteredOrders = (productTypeName: ?string) => {
    let filteredOrders =
      !productTypeName
        ? this.orders
        : this.orders.filter((order) => order.productType === productTypeName);

    this.setState({ filteredOrders });
  }

  toDisplayOrder = (order: Order): DisplayOrder =>
    ({ id: order.id, name: order.name, productType: order.productType });

  render() {
    return (
      <div>
        <OrderList columns={this.props.columns} displayOrders={this.state.filteredOrders} />
        <AddOrder
          onAddOrder={this.onAddOrder}
          activeProductTypeChanged={this.updateFilteredOrders}
        />
      </div>
    );
  }
}

OrderListContainer.propTypes = {
  columns: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ setProductTypes: (productTypes) => dispatch(createFetchProductTypesSuccessAction(productTypes)) });

export default connect(null, mapDispatchToProps)(OrderListContainer);
