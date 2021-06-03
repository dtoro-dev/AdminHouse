import React from 'react'
import { connect } from 'react-redux'

import * as loginAction from '../../../Redux/Actions/loginAction'

const Dashboard = props => {

  return (
    <div>
      Dashboard
    </div>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)