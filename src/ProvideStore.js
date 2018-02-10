import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import Reducers from './Reducer'
import DefaultStore from './Store/DefaultStore'

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const Store = createStore(Reducers, DefaultStore, reduxDevTools, applyMiddleware(thunk), )

export default Store