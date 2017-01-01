import { h, render } from 'preact';
import App from './components/app';
import './scss/app.scss';

function init() {
	render(<App />, document.body);
}


// in development, set up HMR:
if (module.hot) {
	//require('preact/devtools');   // turn this on if you want to enable React DevTools!
	module.hot.accept('../dist/app', () => requestAnimationFrame(init) );
}

init();