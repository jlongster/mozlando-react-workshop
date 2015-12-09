const React = require('react');
const generateSources = require('./generateSources');

const dom = React.DOM;

const App = React.createClass({
  getInitialState: function() {
    const sources = generateSources();
    return { sources: sources };
  },

  render: function() {
    const { sources } = this.state;

    // Add a toolbar below that has a button that, when clicked,
    // generates fresh sources (as if a navigation happened). Give the
    // toolbar a className of `toolbar` to get styles.

    return dom.ul(
      null,
      sources.map(source => dom.li(null, source.name))
    );
  }
});

module.exports = App;
