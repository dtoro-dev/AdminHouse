import axios from 'axios'
import { REGISTER_SUCCESS, REGISTER_LOADING, REGISTER_ERROR } from '../Types/registerType'
import swal from 'sweetalert'

export const registerUser = (formRegister) => async (dispatch) => {
  dispatch({
    type: REGISTER_LOADING
  })
  
  try {

    // const formSend = {
    //   dni: formRegister.dni,
    //   firstname: formRegister.firstname,
    //   lastname: formRegister.lastname,
    //   birthday: formRegister.birthdate,
    //   address: formRegister.address,
    //   phone: `+${formRegister.code_country}${formRegister.phone}`,
    //   email: formRegister.email,
    //   username: formRegister.username,
    //   password: formRegister.password,
    //   profile: 'nonImg',
    //   cityId: formRegister.idCommune
    // }

    // const res = await axios.post('https://www.pandoradeveloper.ml/api/user/signIn', formSend)

    // console.log(res)

    // if (res.status === 201) {
    //   swal('Bienvenido Arcano a Pandora Developer!', (`${res.data.data.firstname} ${res.data.data.lastname} su usuario se a creado satisfactoriamente, se ha enviado un link a su correo para la validacion de mail.`).toUpperCase(),'success')
    //   dispatch({
    //     type: REGISTER_SUCCESS,
    //     payload: res.data.data
    //   })
    // }else if (res.status === 200){
    //   swal('Ops!', 'ERROR AL REGISTRAR ARCANO','error')
    //   dispatch({
    //     type: REGISTER_ERROR,
    //     payload: false
    //   })
    // }

  } catch (error) {
    dispatch({
      type: REGISTER_ERROR,
      payload: false
    })
  }
}