import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import './app.css'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'
import StickyComponent from './components/Sticky'

const App = () => (
  <Router>
    <div>
      <HeaderComponent />
      <div className="content">
        <Routes />
      </div>
      <div className="fixed-sticky">
        <StickyComponent />
      </div>
      <FooterComponent />
    </div>
  </Router>
)

export default hot(module)(App)
