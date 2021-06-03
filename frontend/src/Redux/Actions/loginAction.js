import axios from 'axios'
import { LOGIN_SUCCESS, LOGIN_LOADING, LOGIN_ERROR } from '../Types/loginType'
import swal from 'sweetalert'

export const loginUser = (formLogin) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADING
  })

  try {

    const res = await axios.post('http://192.168.100.8/backend/Api/login.php', formLogin)
 
    if (res.data.error === undefined) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    } else {
      swal('Ops!', res.data.error.toUpperCase(), 'error')
      dispatch({
        type: LOGIN_ERROR,
        payload: false
      })
    }

  } catch (error) {

    swal('Ops!', 'ERROR DE CONEXION', 'error')
    dispatch({
      type: LOGIN_ERROR,
      payload: false
    })
  }
}