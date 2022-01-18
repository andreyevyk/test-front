import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

function Strict() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}

ReactDOM.render(<Strict />, document.getElementById('root'))

serviceWorker.unregister()
