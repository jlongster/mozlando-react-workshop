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

    // Render the items.
  }
});

module.exports = App;
