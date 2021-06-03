import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Particles from 'react-particles-js'
import { Provider } from 'react-redux'
import { MakeStore } from './Redux/Store'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './App/themeConfig'

import 'utils/assets/styles/css/index.css'

const store = MakeStore()
const AdminHouse = document.getElementById('root')

console.log(theme)

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <Particles
        style={theme.particles.style}
        params={theme.particles.params} />
    </ThemeProvider>
  </Provider>,
  AdminHouse
)
