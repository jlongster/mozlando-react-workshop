const React = require('react');
const ReactDOM = require('react-dom');
const redux = require('redux');
const { combineReducers, applyMiddleware } = redux;
const { Provider } = require('react-redux');
const App = require('./components/App');
const reducers = require('./reducers');
const actions = require('./actions');

const createStore = applyMiddleware(
  store => next => action => {
    console.log(action);
    next(action);
  }
)(redux.createStore);

const store = createStore(combineReducers(reducers));
store.dispatch(actions.navigate());

ReactDOM.render(
  React.createElement(
    Provider,
    { store },
    React.createElement(App)
  ),
  document.querySelector('#mount')
);
