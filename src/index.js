import React from 'react';
import ReactDom from 'react-dom';
import App from './component/App';
import './Index.css';

ReactDom.render(
    <App className='local'/>, 
    document.querySelector('#root')
    )