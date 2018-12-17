import React from 'react';

import './ProductList.scss';

import { ProductItem } from '../ProductItem';
import { Pagination } from '../UI/Pagination';

/* eslint-disable react/prefer-stateless-function */
class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div id="store" className="col-md-9">
        <div className="row">
          <div className="clearfix visible-sm visible-xs" />
          {products.map(product => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>

        <div className="store-filter clearfix">
          <span className="store-qty">Showing 20-100 products</span>
          <Pagination />
        </div>
      </div>
    );
  }
}

export default ProductList;
