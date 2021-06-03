import React from 'react'
import { connect } from 'react-redux'
import {
  List,
  makeStyles,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import {
  ListAppItem,
  Icons
} from '../Components'

import * as loginAction from '../../Redux/Actions/loginAction'

const useStyles = makeStyles((theme) => ({
  divider: theme.divider
}));

const ListApp = props => {

  const { menu, setTitle } = props
  const classes = useStyles()

  return (
    <List>
      {(menu) ?
        Object.keys(menu).map((item, index) => (
          <React.Fragment key={index}>
            {(menu[item] === 'divider') ?
              <Divider className={classes.divider} /> :
              (<ListAppItem item={menu[item]} setTitle={setTitle} />)
            }
          </React.Fragment>
        )) : ''}
      <ListItem
        onClick={() => window.location.href = '/'}
        button
        dense>
        <ListItemIcon>
          {Icons['exitToApp']}
        </ListItemIcon>
        <ListItemText primary={'Cerrar Sesión'} />
      </ListItem>
    </List>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListApp)
