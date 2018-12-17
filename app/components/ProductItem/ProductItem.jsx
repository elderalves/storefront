import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ thumbnail, name, category, price }) => (
  <div className="col-md-4 col-xs-6">
    <div className="product">
      <div className="product-img">
        <img src={thumbnail} alt="" />
      </div>
      <div className="product-body">
        <p className="product-category">{category}</p>
        <h3 className="product-name">
          <a href="#">{name}</a>
        </h3>
        <h4 className="product-price">${price}</h4>
      </div>
      <div className="add-to-cart">
        <button type="submit" className="add-to-cart-btn">
          <i className="fa fa-shopping-cart" /> add to cart
        </button>
      </div>
    </div>
  </div>
);

ProductItem.propTypes = {
  thumbnail: PropTypes.string,
  name: PropTypes.string.isRequired,
  category: PropTypes.string,
  price: PropTypes.number,
};

export default ProductItem;
