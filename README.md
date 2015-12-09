
# React Lessons

We're going to create a very simplistic debugger interface. Start by
installing and running the app:

```
$ npm install
$ node run.js
```

## 1. Render a list of sources

Render out the sources with `ul` and `li` tags. Change the `App`
component in `src/components/App.js` to do this.

Fake sources are generated with the `generateSources` function. That
returns an array of objects with `name` and `text` fields, the former
being the name of the source and the latter the contents.

* Tip: create the tags with `dom.ul` and `dom.li` constructors. These
take properties for the first arguments and children as the rest of
the varargs. Example: `dom.li({ className: 'item' }, 'Hello')`.

## 2. Create a toolbar with a button that performs a "mock navigation".

In the debugger, navigation the page generates all new sources. Add a
toolbar at the top with a button that, when clicked, generates a fresh
set of sources and renders them.

* Tip: Use `this.setState` to change the state of the component
* Tip: Give the toolbar a className of `toolbar` to get some styles automatically.
* Tip: Enable hot module reloading with this lesson by uncommenting lines 7
and 8 in `run.js`. Restart your server and make changes to the
component and see it live.

## 3. Abstract the sources list into a component

Pull out the `ul` and create a new component called `Sources`. You'll
want to put it in a different file `sources.js`.

* Tip: When importing the component, you need to wrap it in
`createFactory` like `const Sources = React.createFactory(require('./sources'))`.
* Tip: Apply the `sources` class to the root node of the component to get
some styles.

## 4. Add the ability to select a source

You will need to add some new state to the `App` component:
`selectedSourceName`. This represents the currently selected source.
You also need to enhance `Sources` to take an event callback which is
called when a source is clicked, and the callback will update the state.

`Sources` will also have to take some additional properties...

Tip: Render the currently selected item with a "selected" class.

## 5. Create an editor component

Create an editor component that renders the text of the currently
selected source. The structure of the DOM should look like this now
(excluding the toolbar):

```js
dom.div(
  { className: 'hbox' },
  Sources(...),
  Editor(...)
)
```

Tip: Render the editor with a className of `editor`.

## 6. Add PropTypes

Add `propTypes` to the `Sources` and `Editor` components: https://facebook.github.io/react/docs/reusable-components.html

Try rendering the `Sources` components without the currently selected
source property.

## Done! Final solution on `final` branch

For the following advanced lessons, start with the `final` branch with
the full solution to all the above exercises.

## Advanced: Profile with PerfUtils

*Solution on the `react-perf` branch*

Use the React performance tools to output information about the rendering performance: https://facebook.github.io/react/docs/perf.html

Change the code in `src/app.js` to render it 100 times and change the
`generateSources` function to return a lot more sources.

## Advanced: Dropping down to manual DOM mutations

*Solution on the `manual-mutations` branch*

Remove the existing `App` component, this lesson does not use it
anymore. Create a single `Circle` component that mounts a canvas with
a size of 500x500, and uses the `componentDidMount` and
`componentDidUpdate` to render a white circle onto a black canvas.

The `Circle` component should take the following properties:

`x`: the x position of the circle
`y`: the y position of the circle
`radius`: the radius of the circle
`time`: the current animation time

First, just render a circle with the x, y, and radius properties.

After that, play with oscillating the circle by using the `time`
parameter (maybe generating the x or y values based on `Math.sin`).

Use this sample code to constantly rerender the circle (in `src/app.js`):

```js
const mountNode = document.querySelector('#mount');

function render(dt) {
  ReactDOM.render(Circle({ x: 200, y: 200, dt: dt, radius: 30 }),
                  mountNode);
  requestAnimationFrame(() => render(dt + 16));
}

render(0);
```

## Advanced: Move state into a Redux store

*Solution on the `redux` branch*

If you know nothing of redux, start reading through [the basics](http://redux.js.org/docs/basics/index.html).

Convert the app to store the `sources` and `selectedSourceName` state
in redux. To do this, you will need to add two more folders in `src`:
`actions` and `reducers`. Create a `sources` reducer that responds to
`NAVIGATE` and `SELECT_SOURCE` actions. The `NAVIGATE` action will
generate all new fake sources, and `SELECT_SOURCE` will change the
`selectedSourceName` state.

Use [react-redux](https://github.com/rackt/react-redux) to "connect"
the `App` component to the redux state. To help you move along, here
is the sample code for connecting it that will pull out the `sources`
and `selectedSourceName` state, and also bind actions:

```js
module.exports = connect(
  state => ({
    sources: state.sources.sources,
    selectedSourceName: state.sources.selectedSourceName
  }),
  dispatch => bindActionCreators(actions, dispatch)
)(App);
```

Given this connected component, your event handlers will now just dispatch actions:

```js
  handleNavigation: function() {
    this.props.navigate();
  },

  handleItemSelected: function(source) {
    this.props.selectSource(source);
  },
```

You will also need to create action creators in the `actions` folder
that will dispatch the `NAVIGATION` and `SELECT_SOURCE` components.
These are just functions that return actions.
