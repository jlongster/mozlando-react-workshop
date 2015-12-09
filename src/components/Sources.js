const React = require('react');
const { ul, li } = React.DOM;

const Sources = React.createClass({
  render: function() {
    const { sources, selectedSource } = this.props;

    return ul(
      { className: 'sources' },
      sources.map(source => {
        return li({
          className: (source === selectedSource) ? 'selected' : '',
          onClick: () => this.props.selectItem(source)
        }, source.name);
      })
    )
  }
});

module.exports = Sources;
