import React from 'react';
import Router from './src/Router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';


export default class App extends React.Component {
  render() {
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}