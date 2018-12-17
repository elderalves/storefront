import React from 'react';
import PropTypes from 'prop-types';

function Widget({ title, widgetContent }) {
  return (
    <div className="aside">
      <h3 className="aside-title">{title}</h3>
      {widgetContent()}
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string,
  widgetContent: PropTypes.func,
};

export default Widget;
