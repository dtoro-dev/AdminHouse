import axios from 'axios'
import { SECTION_SUCCESS, SECTION_LOADING, SECTION_ERROR } from '../Types/sectionType'
import swal from 'sweetalert'
import { Icons } from '../../App/Components'

const addSection = (section) => async (dispatch) => {
  dispatch({
    type: SECTION_LOADING
  })

  try {

    const { data } = await axios.post('http://192.168.100.8/backend/Api/section.php?opc=add', section)

    if (data.error === undefined) {

      swal(data.title, data.text, data.icon)

      return data.freePrefix
    } else {
      swal('Ops!', data.error.toUpperCase(), 'error')
      dispatch({
        type: SECTION_ERROR,
        payload: false
      })
    }

  } catch (error) {

    swal('Ops!', 'ERROR DE CONEXION', 'error')
    dispatch({
      type: SECTION_ERROR,
      payload: false
    })
  }
}

const getSection = (proccess = null, setProccess = null, description = null, date_create = null, date_update = null, id_section = null) => async (dispatch) => {
  dispatch({
    type: SECTION_LOADING
  })

  try {

    const { data } = await axios.post('http://192.168.100.8/backend/Api/section.php?opc=query')

    const rows = []

    if (proccess !== null) {
      data.forEach((item, index) => {
        rows[index] = {
          order: (index + 1),
          id_section: item.id_section,
          description: item.description,
          url_to: (item.url_to ? item.url_to : '----------------'),
          icon: Icons[item.icon],
          created_time: item.created_time,
          update_time: (item.update_time ? item.update_time : '----------------'),
          inactive: (item.inactive === "0" ? 'Activo' : 'Inactivo'),
          pannel: {
            color: 'secondary',
            edit: {
              label: `Editar Seccion ${item.description}`,
              to: '/section/edit'
            },
            delete: {
              label: 'Eliminar Seccion',
              value: item.inactive,
              defaultValue: "0",
              to: false,
              click: () => {
                swal({
                  title: "¿Estas seguro que deseas desactivar?",
                  text: `Sección ${item.description}`,
                  icon: "warning",
                  buttons: [
                    'Cancelar',
                    'Desactivar'
                  ],
                  dangerMode: true
                }).then((isConfirm) => {
                  if (isConfirm) {
                    axios.post(`http://192.168.100.8/backend/Api/section.php?opc=delete`, { id_section: item.id_section })
                      .then(res => {

                        const { data } = res

                        if (data) {
                          rows.splice(index, 1)
                          proccess.rows = rows
                          setProccess({ ...proccess })
                          swal(data)
                        } else {
                          swal({
                            title: 'Error',
                            text: `La sección ${item.description} no logro desactivarse`,
                            icon: 'error'
                          })
                        }
                      })
                  }
                })
              }
            }
          }
        }
      });

      proccess.rows = rows
    }

    if (data.error === undefined) {
      dispatch({
        type: SECTION_SUCCESS,
        payload: data
      })
    } else {
      swal('Ops!', data.error.toUpperCase(), 'error')
      dispatch({
        type: SECTION_ERROR,
        payload: false
      })
    }

  } catch (error) {
    swal('Ops!', 'ERROR DE CONEXION', 'error')
    dispatch({
      type: SECTION_ERROR,
      payload: false
    })
  }
}

const trashSection = (proccess = null, setProccess = null, description = null, date_create = null, date_update = null, id_section = null) => async (dispatch) => {
  dispatch({
    type: SECTION_LOADING
  })

  try {

    const { data } = await axios.get('http://192.168.100.8/backend/Api/section.php?opc=query&inactive=1')
    const rows = []

    if (data.error === undefined) {

      data.forEach((item, index) => {
        rows[index] = {
          order: (index + 1),
          id_section: item.id_section,
          description: item.description,
          url_to: (item.url_to ? item.url_to : '----------------'),
          icon: Icons[item.icon],
          created_time: item.created_time,
          update_time: (item.update_time ? item.update_time : '----------------'),
          inactive: (item.inactive === "0" ? 'Activo' : 'Inactivo'),
          pannel: {
            color: 'secondary',
            delete: {
              label: 'Recuperar Seccion',
              value: item.inactive,
              defaultValue: "0",
              click: () => {

                swal({
                  title: "¿Estas seguro que deseas activar?",
                  text: `Sección ${item.description}`,
                  icon: "warning",
                  buttons: [
                    'Cancelar',
                    'Activar'
                  ],
                  dangerMode: true
                }).then((isConfirm) => {
                  if (isConfirm) {
                    axios.post(`http://192.168.100.8/backend/Api/section.php?opc=recover`, { id_section: item.id_section })
                      .then(res => {

                        const { data } = res

                        if (data) {

                          rows.splice(index, 1)
                          proccess.rows = rows
                          setProccess({ ...proccess })

                          swal(data)
                        } else {
                          swal({
                            title: 'Error',
                            text: `La sección ${item.description} no logro activarse`,
                            icon: 'error'
                          })
                        }
                      })
                  }
                })

              }
            }
          }
        }
      })

      proccess.rows = rows

      dispatch({
        type: SECTION_SUCCESS,
        payload: data
      })
    } else {
      swal('Ops!', data.error.toUpperCase(), 'error')
      dispatch({
        type: SECTION_ERROR,
        payload: false
      })
    }

  } catch (error) {
    swal('Ops!', 'ERROR DE CONEXION', 'error')
    dispatch({
      type: SECTION_ERROR,
      payload: false
    })
  }
}

const sectionPrefix = (proccess, setProccess) => async (dispatch) => {
  dispatch({
    type: SECTION_LOADING
  })

  try {

    const { data } = await axios.post('http://192.168.100.8/backend/Api/prefix.php?opc=free', { prefix: 10 })
    
    setProccess({
      ...proccess,
      id_section: data.body
    })

  } catch (error) {
    swal('Ops!', 'ERROR DE CONEXION', 'error')
    dispatch({
      type: SECTION_ERROR,
      payload: false
    })
  }
}

export {
  addSection,
  getSection,
  trashSection,
  sectionPrefix
}