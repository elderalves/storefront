import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import { ProductList } from 'components/ProductList';
import { Filter } from 'components/Filter';
import { Widget } from 'components/UI/Widget';

import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

import './style.scss';

/* eslint-disable react/prefer-stateless-function */
export class ProductsPage extends React.PureComponent {
  state = {
    products: [],
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:3500/products');
    const products = await res.json();

    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <article>
        <Helmet>
          <title>Products Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="section">
          <div className="container">
            <div className="row">
              <div id="aside" className="col-md-3">
                <Widget
                  title="Categories"
                  widgetContent={() => <Filter products={products} />}
                />
              </div>
              <ProductList products={products} />
            </div>
          </div>
        </div>
      </article>
    );
  }
}

ProductsPage.propTypes = {
  loading: PropTypes.bool,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ProductsPage);
