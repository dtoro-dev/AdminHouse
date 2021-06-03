import React from 'react'
import { Route } from 'react-router-dom'
import {
  Login,
  Register,
  ForgotPassword
} from '../Pages'

import { connect } from 'react-redux'
import * as loginAction from '../../Redux/Actions/loginAction'

const PrimeRoute = props => (
  <>
    <Route exact path='/' render={props => <Login {...props} />} />
    <Route exact path='/register' render={props => <Register {...props} />} />
    <Route exact path='/forgotpassword' render={props => <ForgotPassword {...props} />} />
  </>
)

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(PrimeRoute)
