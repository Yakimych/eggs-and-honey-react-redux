// @flow
import React from 'react';
import { connect } from 'react-redux';
import type { ProductType } from '../../types/OrderTypes';
import type { ProductSelectorProps } from '../../types/ProductSelectorTypes';
import type { GlobalState } from '../../types/GlobalState';
import { getProductTypes } from '../../reducers/productTypes';
import PropTypes from 'prop-types';

class ProductSelector extends React.Component<ProductSelectorProps> {
  productTypeIsActive = (productType: ProductType) =>
    productType === this.props.activeProductType;

  productTypeClicked = (productType: ProductType) => {
    const newProductType: ?ProductType = this.props.activeProductType === productType ? null : productType;
    this.props.onActiveChanged(newProductType);
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
  onActiveChanged: PropTypes.func.isRequired
};

const mapStateToProps = (state: GlobalState) => ({ products: getProductTypes(state) });

export default connect(mapStateToProps)(ProductSelector);
