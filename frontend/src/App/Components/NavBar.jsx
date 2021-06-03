import React from 'react'
import clsx from 'clsx'
import { connect } from 'react-redux'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  makeStyles,
  MenuItem,
  ListItem
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import MenuIcon from '@material-ui/icons/Menu'

import * as loginAction from '../../Redux/Actions/loginAction'

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: theme.drawerWidth,
    width: `calc(100% - ${theme.drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  }
}));

const NavBar = props => {

  const classes = useStyles();
  const [logIn, setLogIn] = React.useState(null)
  const open = Boolean(logIn)

  const profileOpen = (e) => {
    setLogIn(e.currentTarget)
  }

  const profileClose = (e) => {
    setLogIn(null)
  }

  return (
    <AppBar
      position='fixed'
      className={clsx(classes.appBar, {
        [classes.appBarShift]: props.open,
      })} >
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          onClick={() => props.setOpen()}
          edge='start'
          className={clsx(classes.menuButton, {
            [classes.hide]: props.open,
          })}>
          <MenuIcon />
        </IconButton>

        {(props.srcLogo) ?
          <img src={props.srcLogo} alt={'Logo'} /> : ''
        }

        <div className={classes.grow} />
        {(props.title) ?
          <Typography style={{ fontSize: '13px' }} variant='h6'>
            {props.title}
          </Typography> : ''
        }

        <div stlye={{ marginRight: 0 }}>
          <IconButton
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
            edge='end'
            onClick={profileOpen}>
            <img style={{ width: '40px', height: '40px', borderRadius: '50%' }} src={`http://192.168.100.8/backend/Users/${props.login[0].image_profile}.png`} alt='ImageProfile' />
            <Typography style={{ fontSize: '13px', marginLeft: '15px' }} variant='h6'>
              {props.login[0].firstname}
              <br/>
              {props.login[0].lastname}
            </Typography>
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={logIn}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={open}
            onClose={profileClose}>
            <ListItem 
              button
              dense
              component={Link}
              to='/profile'
              onClick={() => props.setTitle('Mi Perfil')}>
              <MenuItem onClick={profileClose}>Mi Perfil</MenuItem>
            </ListItem>
            <ListItem 
              button
              dense
              component={Link}
              to='/preference'
              onClick={() => props.setTitle('Preferencia')}>
              <MenuItem onClick={profileClose}>Preferencia</MenuItem>
            </ListItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
