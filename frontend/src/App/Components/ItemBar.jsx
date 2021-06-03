import React from 'react'
import { connect } from 'react-redux'
import {
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import Icons from './Icons'

import * as loginAction from '../../Redux/Actions/loginAction'

const ItemBar = props => {

  const { icon, title } = props

  return (
    <>
      <ListItemIcon>
        {Icons[icon]}
      </ListItemIcon>
      <ListItemText primary={title} />
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemBar)
