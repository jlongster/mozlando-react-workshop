const React = require('react');
const { bindActionCreators } = require('redux');
const { connect } = require('react-redux');
const actions = require('../actions');

const dom = React.DOM;
const Sources = React.createFactory(require('./Sources'));
const Editor = React.createFactory(require('./Editor'));

const App = React.createClass({
  handleNavigation: function() {
    this.props.navigate();
  },

  handleItemSelected: function(source) {
    this.props.selectSource(source);
  },

  render: function() {
    const { sources, selectedSourceName } = this.props;
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

module.exports = connect(
  state => ({
    sources: state.sources.sources,
    selectedSourceName: state.sources.selectedSourceName
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
