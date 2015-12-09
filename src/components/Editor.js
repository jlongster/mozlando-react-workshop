const React = require('react');
const dom = React.DOM;

const Editor = React.createClass({
  render: function() {
    return dom.div({ className: 'editor' },
                   this.props.source ? this.props.source.text : '');
  }
});

module.exports = Editor;
