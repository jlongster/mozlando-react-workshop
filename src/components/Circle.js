const React = require('react');
const ReactDOM = require('react-dom');

const dom = React.DOM;

const Circle = React.createClass({
  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    dt: React.PropTypes.number,
    radius: React.PropTypes.number
  },

  componentDidMount: function() {
    const node = ReactDOM.findDOMNode(this);
    node.width = 500;
    node.height = 500;
    this._ctx = node.getContext('2d');
    this.draw();
  },

  componentWillUnmount: function() {
    // Do any cleanup here
  },

  componentDidUpdate: function() {
    this.draw();
  },

  draw: function() {
    const node = ReactDOM.findDOMNode(this);
    const ctx = this._ctx;
    const dt = this.props.dt;
    const x = this.props.x;
    const y = this.props.y + (Math.sin(dt / 160) * 10);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, node.width, node.height);
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(x, y, this.props.radius, 0, Math.PI*2);
    ctx.closePath();
    ctx.fill();
  },

  render: function() {
    return dom.canvas();
  }
});

module.exports = Circle;
