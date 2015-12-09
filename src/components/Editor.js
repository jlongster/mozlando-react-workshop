const React = require('react');
const { div } = React.DOM;

const Editor = React.createClass({
  render: function() {
    return div({ className: 'editor' }, this.props.source.text);
  }
});

module.exports = Editor;
