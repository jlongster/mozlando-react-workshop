const constants = require('../constants');
const generateSources = require('../generateSources');

const initialState = {
  sources: [],
  selectedSourceName: null
}

function update(state = initialState, action) {
  switch(action.type) {
  case constants.NAVIGATE: {
    const sources = generateSources();
    return {
      sources: sources,
      selectedSourceName: sources[0].name
    };
  }
  case constants.SELECT_SOURCE:
    return Object.assign({}, state, { selectedSourceName: action.name });
  }

  return state;
}

module.exports = update;
