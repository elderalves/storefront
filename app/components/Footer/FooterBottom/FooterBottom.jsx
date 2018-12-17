import React from 'react';

export default function FooterBottom() {
  return (
    <div id="bottom-footer" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <span className="copyright">
              Copyright ©
              <script>document.write(new Date().getFullYear());</script>
              2018 All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
