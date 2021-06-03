import { makeStyles } from '@material-ui/styles'
import React from 'react'
import { ButtonFloat } from '.'

const useStyle = makeStyles(theme => ({
  btnFloat: {
    display: 'flex',
    position: 'absolute',
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column'
  }
}))

const BtnListFloat = props => {

  const classes = useStyle()
  const { list } = props

  return (
    <div className={classes.btnFloat}>
      {list.map((btn, key) => <ButtonFloat key={key} color={btn.color} label={btn.label} icon={btn.icon} click={btn.click} to={btn.to} />)}
    </div>
  )
}

export default BtnListFloat
