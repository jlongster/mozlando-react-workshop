const React = require('react');
const ReactDOM = require('react-dom');
const Circle = React.createFactory(require('./components/Circle'));

const mountNode = document.querySelector('#mount');

function render(x, y, dt) {
  ReactDOM.render(Circle({ x: x, y: y, dt: dt, radius: 30 }),
                  mountNode);
  requestAnimationFrame(() => render(x, y, dt + 16));
}

render(200, 200, 0);
