import React from 'react';

function FooterTop() {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-xs-12">
            <div className="footer">
              <h3 className="footer-title">About Us</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
              <ul className="footer-links">
                <li>
                  <a href="#">
                    <i className="fa fa-map-marker" />
                    1734 Stonecoal Road
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-phone" />
                    +021-95-51-84
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-envelope-o" />
                    email@email.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterTop;
