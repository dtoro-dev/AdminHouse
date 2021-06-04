import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import {
  BtnListFloat,
  Icons,
  Tables
} from '../../../Components'

import * as sectionAction from '../../../../Redux/Actions/sectionAction'

const Query = props => {

  const [proccess, setProccess] = useState({
    search: {},
    drop: false,
    edit: false,
    rows: []
  })

  useEffect(() => {
    props.getSection(proccess, setProccess)
  }, [])


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
    }
  ]

  const thead = [
    { id: 'order', label: 'N°', minWidth: 20, format: 'number', align: 'center' },
    { id: 'icon', label: 'Icono', minWidth: 100, align: 'center' },
    { id: 'description', label: 'Descripción', minWidth: 100 },
    { id: 'id_section', label: 'Permiso', minWidth: 100, align: 'center' },
    { id: 'url_to', label: 'Ruta', minWidth: 100 },
    { id: 'created_time', label: 'F. Creación', minWidth: 50, format: 'date', align: 'center' },
    { id: 'inactive', label: 'Estado', minWidth: 50, align: 'center' },
    { id: 'pannel', label: '', minWidth: 100, align: 'center' }
  ]

  return (
    <>
      <Tables columns={thead} rows={proccess.rows} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Query)
