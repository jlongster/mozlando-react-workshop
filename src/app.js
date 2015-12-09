const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./components/App');
const Perf = require('react-addons-perf');

Perf.start();
for(var i=0; i<100; i++) {
  ReactDOM.render(React.createElement(App),
                  document.querySelector('#mount'));
}
Perf.stop();

Perf.printInclusive(Perf.getLastMeasurements());
Perf.printExclusive(Perf.getLastMeasurements());
Perf.printWasted(Perf.getLastMeasurements());
Perf.printDOM(Perf.getLastMeasurements());
