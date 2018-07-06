import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SimpleApp from './SimpleApp';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App myprop="myprop" myFun={(data) => console.log("myFun", data)}/>, document.getElementById('root'));
//ReactDOM.render(<SimpleApp myprop="myprop"/>, document.getElementById('root'));
ReactDOM.render(<App myprop="myprop"/>, document.getElementById('root'));

registerServiceWorker();
