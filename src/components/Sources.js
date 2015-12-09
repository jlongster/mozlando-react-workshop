const React = require('react');
const dom = React.DOM;

const Sources = React.createClass({
  render: function() {
    const { sources } = this.props;

    return dom.ul(
      { className: 'sources' },
      sources.map(source => {
        return dom.li(null, source.name);
      })
    )
  }
});

module.exports = Sources;
