// @flow
import type { ProductType } from '../../types/OrderTypes';
import type { ProductSelectorProps } from '../../types/ProductSelectorTypes';
import type { GlobalState } from '../../types/GlobalState';
import React from 'react';
import PropTypes from 'prop-types';
import { selectProductTypeAction } from '../../actions/productTypes';
import { connect } from 'react-redux';
import { getProductTypes, getSelectedProduct } from '../../reducers/productTypes';

class ProductSelector extends React.Component<ProductSelectorProps> {
  productTypeIsActive = (productType: ProductType) =>
    productType === this.props.activeProductType;

  // TODO: Should this be done in the reducer?
  productTypeClicked = (productType: ProductType) => {
    const newProductType: ?ProductType = this.props.activeProductType === productType ? null : productType;
    this.props.selectProductType(newProductType);
  }

  render() {
    return (
      <div>
        <div className="btn-group">
          {this.props.products.map((product, index) => (
            <button
              key={index}
              type="button"
              className={`btn btn-${this.productTypeIsActive(product) ? 'success' : 'outline-info'}`}
              onClick={() => this.productTypeClicked(product)}
            >
              {product}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

ProductSelector.propTypes = {
  products: PropTypes.array.isRequired,
  activeProductType: PropTypes.string,
  selectProductType: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch: Dispatch) =>
  ({ selectProductType: (productType) => dispatch(selectProductTypeAction(productType)) });

const mapStateToProps = (state: GlobalState) =>
  ({
    products: getProductTypes(state),
    activeProductType: getSelectedProduct(state)
  });

export default connect(mapStateToProps, mapDispatchToProps)(ProductSelector);
