// @flow
import type { AddOrderProps, AddOrderState } from '../../types/AddOrderTypes';
import type { GlobalState } from '../../types/GlobalState';
import ProductSelector from '../ProductSelector/ProductSelector';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedProduct } from '../../reducers/productTypes';

class AddOrder extends React.Component<AddOrderProps, AddOrderState> {
  constructor(props: AddOrderProps) {
    super(props);
    this.state = { name: '' };
  }

  nameChanged = (event: SyntheticInputEvent<EventTarget>) =>
    this.setState({ name: event.target.value });

  canAddOrder = () => !!this.state.name && !!this.props.selectedProductType;
 
  render() {
    return (
      <div className="mt-3">
        <input type="text" className="mr-1" onChange={this.nameChanged} />
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.selectedProductType != null
            ? this.props.onAddOrder(this.state.name, this.props.selectedProductType)
            : null}
          disabled={!this.canAddOrder()}>
            Add
        </button>
        <ProductSelector />
      </div>
    );
  }
}

AddOrder.propTypes = {
  onAddOrder: PropTypes.func.isRequired
};

const mapStateToProps = (state: GlobalState) =>
  ({ selectedProductType: getSelectedProduct(state) });

export default connect(mapStateToProps)(AddOrder);
