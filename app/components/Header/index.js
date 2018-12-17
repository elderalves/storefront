import React from 'react';

import { TopHeader } from './TopHeader';
import { MainHeader } from './MainHeader';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <TopHeader />
        <MainHeader />
      </div>
    );
  }
}

export default Header;
