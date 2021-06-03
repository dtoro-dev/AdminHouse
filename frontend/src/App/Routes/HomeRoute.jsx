import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
  Dashboard,
  Preferences,
  Profile
 } from '../Pages/Home'

import * as loginAction from '../../Redux/Actions/loginAction'

const SettingRoute = props => {
  return (
    <>
      <Route exact path='/' component={props => <Dashboard {...props} />} />
      <Route exact path='/dashboard' render={props => <Dashboard {...props} />} />
      <Route exact path='/preference' render={props => <Preferences {...props} />} />
      <Route exact path='/profile' render={props => <Profile {...props} />} />
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingRoute)
