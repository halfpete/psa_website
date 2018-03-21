import React from 'react';
import ReactDOM from 'react-dom';


// main app
import App from './containers/App';
import AboutMe from './containers/aboutMe';

ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<AboutMe />, document.getElementById('aboutMe'))
