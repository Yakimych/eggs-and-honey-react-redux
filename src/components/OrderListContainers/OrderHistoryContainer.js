// @flow
import type { OrderHistoryProps } from '../../types/OrderHistoryTypes';
import type { ResolvedOrder, DisplayOrder } from '../../types/OrderTypes';
import type { GlobalState } from '../../types/GlobalState';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import OrderList from '../OrderList/OrderList';
import { unresolveOrder } from '../../actions/orders';
import { getResolvedOrders } from '../../reducers/orders';

class OrderHistoryContainer extends React.Component<OrderHistoryProps> {
  toDisplayOrder = (order: ResolvedOrder): DisplayOrder =>
    ({
      id: order.id,
      name: order.name,
      productType: order.productType,
      datePlaced: order.datePlaced.toLocaleDateString('sv'),
      dateResolved: order.dateResolved.toLocaleDateString('sv')
    });

  render() {
    return <OrderList
      columns={this.props.columns}
      actionLabel={'Unresolve'}
      action={this.props.unresolveOrder}
      displayOrders={this.props.resolvedOrders.map(this.toDisplayOrder)} />;
  }
}

OrderHistoryContainer.propTypes = {
  columns: PropTypes.array.isRequired,
  resolvedOrders: PropTypes.array.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({ resolvedOrders: getResolvedOrders(state) });

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ unresolveOrder: (resolvedOrderId) => dispatch(unresolveOrder(resolvedOrderId)) });

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryContainer);
