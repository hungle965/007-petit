import './css/main.css'
import $ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import Main from './app/Main'
import Config from './app/config/Config'
import Staic from './app/config/Static'
/*
$.ajax({
    url: Config.ajaxUrl,
    type: 'post',
    dataType: 'json',
    data: {
        action: 'preloadData'
    }
}).done((ajaxResponse) => {
    ReactDOM.render(<Main data={ajaxResponse} />, document.getElementById('root'))
})
*/
ReactDOM.render(<Main data={Staic} />, document.getElementById('root'))