const React = require('react');
const generateSources = require('./generateSources');

const dom = React.DOM;
const Sources = React.createFactory(require('./Sources'));
const Editor = React.createFactory(require('./Editor'));

const App = React.createClass({
  displayName: "App",

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

    return dom.div(
      { className: 'app' },
      dom.div(
        { className: 'toolbar' },
        dom.button({
          onClick: this.handleNavigation
        }, "Mock Tab Navigation")
      ),
      dom.div(
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
