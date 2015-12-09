const React = require('react');
const generateSources = require('./generateSources');

const dom = React.DOM;
const Sources = React.createFactory(require('./Sources'));

const App = React.createClass({
  getInitialState: function() {
    const sources = generateSources();
    return { sources: sources };
  },

  handleNavigation: function() {
    const sources = generateSources();
    this.setState({ sources: sources });
  },

  render: function() {
    const { sources } = this.state;

    // Add the ability to select a source by enhancing `Sources` with
    // a `selectItem` event and keeping the state here.

    return dom.div(
      { className: 'app' },
      dom.div(
        { className: 'toolbar' },
        dom.button({
          onClick: this.handleNavigation
        }, "Mock Tab Navigation")
      ),
      Sources({ sources })
    );
  }
});

module.exports = App;
