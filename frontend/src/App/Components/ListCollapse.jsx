import React from 'react'
import { ListAppItem } from '../Components'
import { connect } from 'react-redux'
import {
  Collapse,
  List,
  Divider,
  makeStyles
} from '@material-ui/core'

import * as loginAction from '../../Redux/Actions/loginAction'

const useStyles = makeStyles((theme) => ({
  divider: theme.divider
}));

const ListCollapse = props => {

  const { collapsed, items, setTitle } = props
  const classes = useStyles()
  
  return (
    <Collapse in={collapsed} timeout='auto' unmountOnExit>
      {(items) ? 
        Array.isArray(Object.keys(items)) ? (
          <List disablePadding dense>
            {Object.keys(items).map((subItem, index) => (
              <React.Fragment key={`${items[subItem].name}${index}`}>
                {subItem === 'divider' ?
                  <Divider className={classes.divider} /> :
                  <ListAppItem item={items[subItem]} setTitle={setTitle} />
                }
              </React.Fragment>
            ))}
          </List>
        ) : null
        : null
      }
      <Divider className={classes.divider} />
    </Collapse>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCollapse)
