const React = require('react');
const SourceShape = require('./sourceShape');
const dom = React.DOM;

const Editor = React.createClass({
  propTypes: {
    source: SourceShape.isRequired
  },

  render: function() {
    return dom.div({ className: 'editor' }, this.props.source.text);
  }
});

module.exports = Editor;
