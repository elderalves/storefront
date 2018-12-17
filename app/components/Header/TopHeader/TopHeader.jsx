import React from 'react';

import './TopHeader.scss';

/* eslint-disable react/prefer-stateless-function */
class TopHeader extends React.Component {
  render() {
    return (
      <div id="top-header">
        <div className="container">
          <div className="row justify-content-between">
            <ul className="header-links">
              <li>
                <a href="#">
                  <i className="fa fa-phone" /> +021-95-51-84
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-envelope-o" /> email@email.com
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker" /> 1734 Stonecoal Road
                </a>
              </li>
            </ul>
            <ul className="header-links">
              <li>
                <a href="signupnew.html">
                  <i className="fa fa-user-plus" /> Signup
                </a>
              </li>
              <li>
                <a href="loginnew.html">
                  <i className="fa fa-sign-in" /> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopHeader;
