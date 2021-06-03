import React from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import {
  Drawer,
  IconButton,
  makeStyles,
  Divider,
  useTheme
} from '@material-ui/core'
import {
  ListApp,
  Icons
} from '../Components'

import * as loginAction from '../../Redux/Actions/loginAction'

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawderPaper: {
    backgroundColor: theme.config.primary
  },
  drawerOpen: {
    width: theme.drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  divider: theme.divider
}));

const SideBar = props => {

  const classes = useStyles()
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.close,
        [classes.drawerClose]: !props.close,
      })}
      classes={{
        paper: clsx(classes.drawderPaper, {
          [classes.drawerOpen]: props.close,
          [classes.drawerClose]: !props.close,
        }),
      }}>
      <div style={{ marginTop: '8px' }} className={classes.toolbar}>
        <IconButton onClick={() => props.setClose()}>
          {theme.direction === 'rtl' ? Icons['chevronRightIcon']: Icons['chevronLeftIcon']}
        </IconButton>
      </div>
      <span style={{ marginTop: '8px' }}>
        <Divider className={classes.divider} />
        <ListApp menu={props.login[0].role.toSideBar} setTitle={props.setTitle}/>
      </span>
    </Drawer>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
