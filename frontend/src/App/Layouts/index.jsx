import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Interface from './Interface'
import * as R from '../Routes'

import { connect } from 'react-redux'
import * as loginAction from '../../Redux/Actions/loginAction'

const Layout = props => {

  return (
    <BrowserRouter>
      <Switch>
        {(props.login[0]) ? 
        <Interface>
          <R.SettingRoute />
          <R.HomeRoute />
        </Interface>
        : <R.PrimeRoute />}
      </Switch>
    </BrowserRouter>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
