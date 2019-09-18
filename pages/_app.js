import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { store } from '../store/reducers';
import { initialState } from '../store/reducers';


const makeStore = (initialState, options) => {
  return createStore(store, initialState);
};

class Greenlink extends App{
  static async getInitialProps({Component, ctx}) {

    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return {pageProps};

  }
  render() {
    const {Component, pageProps, store} = this.props;
    return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
    );
  }
};

export default withRedux(makeStore)(Greenlink);
