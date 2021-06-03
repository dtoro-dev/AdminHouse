import React from 'react'
import { connect } from 'react-redux'
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
  Radio
} from '@material-ui/core'

import * as sectionAction from '../../../../Redux/Actions/sectionAction'

const Add = props => {

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

  const saveSection = () => {

  }

  const renderIcons = () => {

    let keyIcons = []
    let index = 0
    for (var key in Icons) {
      keyIcons[index] = key
      index++
    }
    return (
      <div style={{maxHeight: '150px', width: '100%', overflowY: 'scroll', margin: '15px'}}>
        <Grid container>
          {
            keyIcons.map((oIcon, index) => (
              <Grid item xs={4}>
                <FormControlLabel
                 value={oIcon}
                 control={<Radio color='primary'/>}
                 label={Icons[oIcon]}
                 labelPlacement='start'/>
              </Grid>
            ))
          }
        </Grid>
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
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id='id_section'
              name='id_section'
              label='Folio Asignado'
              fullWidth
              autoComplete='off'
              disabled={true}
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
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id='url_to'
              name='url_to'
              label='Route'
              fullWidth
              autoComplete='off'
            />
          </Grid>
          {renderIcons()}
          <Grid item xs={12}>
            <Button type='submit'
              fullWidth variant='contained'
              color='secondary'
              onClick={saveSection} >
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
