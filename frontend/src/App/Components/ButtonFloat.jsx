import React from 'react'
import { Fab, makeStyles, Zoom } from '@material-ui/core';
import { Link } from 'react-router-dom'

const useStyle = makeStyles(theme => ({
  fab: {
    position: 'relative',
    margin: '5px'
  }
}))

const ButtonFloat = props => {

  const classes = useStyle()
  const { to, label, color, icon, click } = props

  return (
    <Zoom
      timeout={200}
      unmountOnExit
      in={true}
      style={{
        transitionDelay: `200ms`,
      }}>
      <Fab component={Link} className={classes.fab} color={color} aria-label={label} to={to ? to : null} onClick={click}>
        {icon}
      </Fab>
    </Zoom>
  )
}

export default ButtonFloat
