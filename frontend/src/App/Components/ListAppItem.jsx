import React from 'react'
import { connect } from 'react-redux'
import { ListItem } from '@material-ui/core'
import { Link } from 'react-router-dom'
import {
  ItemBar,
  ListCollapse,
  Icons
} from '../Components/'

import * as loginAction from '../../Redux/Actions/loginAction'

const ListAppItem = ({ item, setTitle }) => {

  const [collapsed, setCollapsed] = React.useState(false)
  let { to, items, title, icon } = item

  const expanded = () => {
    if (Array.isArray(Object.keys(items)) && Object.keys(items).length) {
      return collapsed ? (
        Icons['expandMoreIcon']
      ) : (
        Icons['expandLessIcon']
      )
    }
  }

  return (
    <>
      {(to) ?
        <ListItem
          button
          dense
          component={Link}
          to={to}
          onClick={() => setTitle(title)}>
          <ItemBar title={title} icon={icon} />
        </ListItem> :
        <ListItem 
          button 
          dense 
          onClick={() => setCollapsed(!collapsed)}>
          <ItemBar title={title} icon={icon} />
          {expanded()}
        </ListItem>
      }
      <ListCollapse collapsed={collapsed} items={items} setTitle={setTitle} />
    </>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAppItem)
