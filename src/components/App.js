const React = require('react');
const generateSources = require('./generateSources');

const { div, button } = React.DOM;
const Sources = React.createFactory(require('./Sources'));
const Editor = React.createFactory(require('./Editor'));

const App = React.createClass({
  getInitialState: function() {
    const sources = generateSources();
    return { sources: sources,
             selectedSourceName: sources[0].name };
  },

  handleNavigation: function() {
    const sources = generateSources();
    this.setState({ sources: sources,
                    selectedSourceName: sources[0].name });
  },

  handleItemSelected: function(source) {
    this.setState({ selectedSourceName: source.name });
  },

  render: function() {
    const { sources, selectedSourceName } = this.state;
    const selectedSource = sources.find(source => source.name === selectedSourceName);

    return div(
      { className: 'app' },
      div(
        { className: 'toolbar' },
        button({
          onClick: this.handleNavigation
        }, "Mock Tab Navigation")
      ),
      div(
        { className: 'hbox' },
        Sources({
          sources,
          selectedSource,
          selectItem: this.handleItemSelected
        }),
        Editor({ source: selectedSource })
      )
    );
  }
});

module.exports = App;
