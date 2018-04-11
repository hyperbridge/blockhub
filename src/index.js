import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { combineReducers } from 'redux'
import { Router, IndexRoute, Route, withRouter, applyRouterMiddleware } from 'react-router'
import { createStore, applyMiddleware, compose } from 'redux'

import { history, initialState, enhancers, middleware } from './store'
import reducers from './modules'
import App from './app'

import './lib/flex'
import 'sanitize.css/sanitize.css'

const target = document.querySelector('#root')
const token = localStorage.getItem('token')

const store = createStore(
    combineReducers({
        ...reducers
    }),
    initialState, // initial state
    compose(
        applyMiddleware(...middleware),
        // If you are using the devToolsExtension, you can add it here also
        window.devToolsExtension ? window.devToolsExtension() : f => f,
        ...enhancers
    )
)

render(
    <Provider store={store}>
        <App store={store} />
    </Provider>,
    target
)