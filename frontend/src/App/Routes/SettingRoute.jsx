import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
  Access,
  ParticlesConfig,
  Roles,
  Theme,
  Users,
  Section,
  Module,
  Main
 } from '../Pages/Settings'

import * as loginAction from '../../Redux/Actions/loginAction'

const SettingRoute = props => {
  return (
    <>
      <Route exact path='/access' render={props => <Access {...props} />} />
      <Route exact path='/particlesconfig' render={props => <ParticlesConfig {...props} />} />
      <Route exact path='/role' render={props => <Roles {...props} />} />
      <Route exact path='/theme' render={props => <Theme {...props} />} />
      <Route exact path='/users' render={props => <Users {...props} />} />
      <Route exact path='/section' render={props => <Section.Query {...props} />} />
      <Route exact path='/section/add' render={props => <Section.Add {...props} />} />
      <Route exact path='/section/edit' render={props => <Section.Edit {...props} />} />
      <Route exact path='/section/trash' render={props => <Section.Trash {...props} />} />
      <Route exact path='/module' render={props => <Module {...props} />} />
      <Route exact path='/submain' render={props => <Main {...props} />} />
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
