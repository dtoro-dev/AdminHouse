import React from 'react'
import { makeStyles } from '@material-ui/styles'

import AdminHouseLogoWhite from 'utils/assets/images/adminhouse-logo-white.png'

import 'utils/assets/styles/css/loading.css'

const useStyle = makeStyles(theme => ({
  back: theme.config.loading.div_back,
  front: theme.config.loading.div_front
}))

const Loading = props => {

  const classes = useStyle()

  return (
    <>
      {(props.load) ?
        <div className={classes.back}>
          <div className={classes.front}>
            <img className={'girar'} src={AdminHouseLogoWhite} alt={'adminhouse-logo-dark'} />
          </div>
        </div> : props.children
      }
    </>
  )
}

export default Loading
