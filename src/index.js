import { h, render } from 'preact';
import App from './components/app';
import './scss/app.scss';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import RootReducer from './reducers';

const store = createStore(RootReducer,
                          applyMiddleware(thunk),
);


function init() {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
	document.body);
}


// in development, set up HMR:
if (module.hot) {
	// require('preact/devtools');   // turn this on if you want to enable React DevTools!
  module.hot.accept('../dist/app', () => requestAnimationFrame(init));
}

init();
