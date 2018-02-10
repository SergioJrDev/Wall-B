import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import Store from './ProvideStore'

import './style'

ReactDOM.render(
    <Provider store={Store}>
      <App />
    </Provider>,
    document.getElementById('root')
)   