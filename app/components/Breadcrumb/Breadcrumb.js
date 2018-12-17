import React from 'react';

import './Breadcrumb.scss';

/* eslint-disable react/prefer-stateless-function */
class Breadcrumb extends React.Component {
  render() {
    return (
      <div id="breadcrumb" className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ul className="breadcrumb-tree">
                <li>
                  <a href="index.html">Home</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
