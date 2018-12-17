import React from 'react';

import './MainHeader.scss';

import LogoElectro from '../../../assets/images/logo.png';

/* eslint-disable react/prefer-stateless-function */
class MainHeader extends React.Component {
  render() {
    return (
      <div id="main-header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
                <a href="index.html" className="logo">
                  <img src={LogoElectro} alt="Store Demo" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="header-search" />
            </div>
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                <div>
                  <a href="#">
                    <i className="fa fa-question-circle-o" />
                    <span>Help</span>
                  </a>
                </div>
                <div className="dropdown">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <i className="fa fa-shopping-cart" />
                    <span>Your Cart</span>
                    <div className="qty">3</div>
                  </a>
                  <div className="cart-dropdown">
                    <div className="cart-list">
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product01.png" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name">
                            <a href="#">product name goes here</a>
                          </h3>
                          <h4 className="product-price">
                            <span className="qty">1x</span>
                            $980.00
                          </h4>
                        </div>
                        <button className="delete">X</button>
                      </div>
                      <div className="product-widget">
                        <div className="product-img">
                          <img src="./img/product02.png" alt="" />
                        </div>
                        <div className="product-body">
                          <h3 className="product-name">
                            <a href="#">product name goes here</a>
                          </h3>
                          <h4 className="product-price">
                            <span className="qty">3x</span>
                            $980.00
                          </h4>
                        </div>
                        <button className="delete">X</button>
                      </div>
                    </div>
                    <div className="cart-summary">
                      <small>3 Item(s) selected</small>
                      <h5>SUBTOTAL: $2940.00</h5>
                    </div>
                    <div className="cart-btns">
                      <a href="#">View Cart</a>
                      <a href="checkoutnew.html">
                        Checkout <i className="fa fa-arrow-circle-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars" />
                    <span>Menu</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainHeader;
