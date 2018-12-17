import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  return (
    <ul className="store-pagination">
      <li className="active">1</li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">4</a>
      </li>
      <li>
        <a href="#">&gt;</a>
      </li>
    </ul>
  );
}

Pagination.propTypes = {};

export default Pagination;
