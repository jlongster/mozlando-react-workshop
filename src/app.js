const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');

ReactDOM.render(React.createElement(App),
                document.querySelector('#mount'));
