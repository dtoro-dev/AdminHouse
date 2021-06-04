import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  BtnListFloat,
  Icons,
  Loading
} from '../../../Components'
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  FormControlLabel,
  Radio,
  RadioGroup
} from '@material-ui/core'

import * as sectionAction from '../../../../Redux/Actions/sectionAction'

const Add = props => {

  const [proccess, setProccess] = useState({
    id_section: 0,
    description: '',
    url_to: '',
    icon: 'expandMoreIcon'
  })

  useEffect(() => {
    props.sectionPrefix(proccess, setProccess)
  }, [])

  const list = [
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

  const sendForm = async () => {
    let freePrefix = await props.addSection(proccess)
    console.log(freePrefix)
    resetForm(freePrefix)
  }

  const setForm = (e) => {
    setProccess({
      ...proccess,
      [e.target.name]: e.target.value
    })
  }

  const resetForm = async (freePrefix) => {
    setProccess({
      id_section: freePrefix,
      description: '',
      url_to: '',
      icon: 'expandMoreIcon'
    })
  }

  const renderIcons = () => {

    let keyIcons = []
    let index = 0
    for (var key in Icons) {
      keyIcons[index] = key
      index++
    }
    return (
      <div style={{ maxHeight: '150px', width: '100%', overflowY: 'scroll', margin: '15px' }}>
        <RadioGroup aria-label="icon" name="icon" value={proccess.icon} onChange={setForm}>
          <Grid container>
            {
              keyIcons.map((oIcon, key) => (
                <Grid item xs={4} key={key}>
                  <FormControlLabel
                    value={oIcon}
                    control={<Radio color='primary' />}
                    label={Icons[oIcon]}
                    labelPlacement='start' />
                </Grid>
              ))
            }
          </Grid>
        </RadioGroup>
      </div>
    )
  }

  return (
    <Loading load={props.loading} >
      <Paper elevation={3} style={{ padding: 20, width: '400px' }}>
        <Typography variant='h6' gutterBottom>
          Agregar Sección
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={3}>
            <TextField
              id='id_section'
              name='id_section'
              label='Prefix'
              fullWidth
              disabled
              onChange={setForm}
              value={proccess.id_section}
              inputProps={{ style: { textAlign: 'center' } }}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={9} sm={9}>
            <TextField
              required
              id='url_to'
              name='url_to'
              label='Route'
              fullWidth
              autoComplete='off'
              onChange={setForm}
              value={proccess.url_to}
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id='description'
              name='description'
              label='Descripción'
              fullWidth
              autoComplete='off'
              onChange={setForm}
              value={proccess.description}
              variant='outlined'
            />
          </Grid>
          {renderIcons()}
          <Grid item xs={12}>
            <Button type='submit'
              fullWidth variant='contained'
              color='secondary'
              onClick={sendForm} >
              Agregar
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <BtnListFloat list={list} />
    </Loading>
  )
}

const mapStateToProps = ({ sectionReducer, loginReducer }) => {
  return { sectionReducer, loginReducer }
}

const mapDispatchToProps = {
  ...sectionAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
