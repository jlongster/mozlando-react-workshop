const constants = require('../constants');

function navigate() {
  return {
    type: constants.NAVIGATE
  }
}

function selectSource(source) {
  return {
    type: constants.SELECT_SOURCE,
    name: source.name
  }
}

module.exports = { navigate, selectSource };
