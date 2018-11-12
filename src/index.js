import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Header from './components/layout/header/header';
import Menu from './components/layout/menu/menu';
import Footer from './components/layout/footer/footer';

ReactDOM.render(
    <div>
        <Header/>
        <Menu/>
        <Footer/>
    </div>
    , 
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
