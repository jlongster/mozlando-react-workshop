const React = require('react');
const generateSources = require('./generateSources');

const dom = React.DOM;

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

    return dom.div(
      { className: 'app' },
      dom.div(
        { className: 'toolbar' },
        dom.button({
          onClick: this.handleNavigation
        }, "Mock Tab Navigation")
      ),
      dom.ul(
        null,
        sources.map(source => {
          return dom.li(null, source.name);
        })
      )
    );
  }
});

module.exports = App;
