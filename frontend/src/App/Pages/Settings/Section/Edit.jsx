import React from 'react'
import { connect } from 'react-redux'
import {
  BtnListFloat,
  Icons
} from '../../../Components'

import * as sectionAction from '../../../../Redux/Actions/sectionAction'

const Edit = props => {
  const { toAction } = props.loginReducer.login[0].role
  const list = [
    {
      color: 'secondary',
      label: 'Agregar Sección',
      icon: Icons[toAction[2].icon],
      to: '/section/add'
    },
    {
      color: 'secondary',
      label: 'Ver Inactivos',
      icon: Icons['deleteIcon'],
      to: '/section/trash'
    },
    {
      color: 'secondary',
      label: 'Atrás',
      icon: Icons['backspaceIcon'],
      to: '/section'
    }
  ]

  return (
    <>
      edit
      <BtnListFloat list={list} />
    </>
  )
}

const mapStateToProps = ({ sectionReducer, loginReducer }) => {
  return { sectionReducer, loginReducer }
}

const mapDispatchToProps = {
  ...sectionAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit)

