import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/bootstrap/bootstrap-grid.css';
import './css/bootstrap/bootstrap-reboot.css';
import './css/css/bootstrap-reboot.css';
import './css/css/mixins/_text-hide.css';
import './css/animate.css';
import './css/aos.css';
import './css/bootstrap.min.css';
// import './css/flaticon.css';
// import './css/icomoon.css';
// import './css/ionicons.min.css';
import './css/magnific-popup.css';
// import './css/open-iconic-bootstrap.min.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Hello = () => {
    return <p>Hello</p>
}

ReactDOM.render(<App />, document.getElementById('root'));

//ReactDOM.render(<Hello />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
