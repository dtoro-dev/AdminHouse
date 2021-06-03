import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { Loading } from '../Components'
import {
  Paper,
  Grid,
  Button,
  Container,
  AppBar,
  Toolbar,
  TextField
} from '@material-ui/core'

import AdminHouseWhite from 'utils/assets/images/admin-house-white.png'

import * as loginAction from '../../Redux/Actions/loginAction'

const Login = props => {

  const [formLogin, setFormLogin] = useState({
    username: '',
    password: ''
  })

  const setForm = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value
    })
  }

  const submitLogIn = (e) => {
    e.preventDefault()

    if (formLogin.username === undefined || formLogin.username === '') {
      swal('Ops!', 'Debe ingresar usuario', 'error')
      return false
    }

    if (formLogin.password === undefined || formLogin.password === '') {
      swal('Ops!', 'Debe ingresar contraseña', 'error')
      return false
    }

    props.loginUser(formLogin)
    resetForm()

  }

  const resetForm = () => {
    setFormLogin({
      username: '',
      password: ''
    })
  }

  return (
    <Loading load={props.loading} >
      <Container component='main' maxWidth='xs'>
        <form style={{ marginTop: '120px' }}>
          <AppBar position='static' color='secondary'>
            <Toolbar style={{ padding: '10px 10px' }}>
              <img src={AdminHouseWhite} width={'100%'} alt='AdminHouseWhite' />
            </Toolbar>
          </AppBar>
          <Paper style={{ padding: 20 }}>
            <TextField
              color='secondary'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              name='username'
              label='Usuario'
              autoComplete='off'
              onChange={setForm}
              value={formLogin.username} />
            <TextField
              color='secondary'
              variant='outlined'
              margin='normal'
              required
              fullWidth
              label='Contraseña'
              type='password'
              id='password'
              name='password'
              onChange={setForm}
              value={formLogin.password} />
            {/* <FormControlLabel
            control={<Checkbox value='remember' color='secondary' />}
            label='Recordar mi contraseña' color='secondary' /> */}
            <Button type='submit'
              fullWidth variant='contained'
              color='secondary'
              onClick={submitLogIn} >
              Ingresar
            </Button>
            <Grid container style={{ marginTop: '10px' }}>
              <Grid item xs>
                <Link to='/forgotpassword'>
                  ¿Olvidaste tú Contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/register' >
                  Registrate
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </form>
      </Container>
    </Loading>
  )
}

const mapStateToProps = ({ loginReducer }) => {
  return loginReducer
}

const mapDispatchToProps = {
  ...loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
