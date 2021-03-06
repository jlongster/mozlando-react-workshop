const React = require('react');
const dom = React.DOM;

const Sources = React.createClass({
  render: function() {
    const { sources, selectedSource } = this.props;

    return dom.ul(
      { className: 'sources' },
      sources.map(source => {
        return dom.li({
          className: (source === selectedSource) ? 'selected' : '',
          onClick: () => this.props.selectItem(source)
        }, source.name);
      })
    )
  }
});

module.exports = Sources;
