import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { Link } from 'react-router-dom'

const ButtonPannel = props => {

  const { label, color, click, icon, to } = props

  return (
    <abbr title={label}>
      {
        (to !== false) ?
          <IconButton
            component={Link}
            color={color}
            aria-label={label}
            to={to}>
            {icon}
          </IconButton> :
          <IconButton
            color={color}
            aria-label={label}
            onClick={click}>
            {icon}
          </IconButton>
      }
    </abbr>
  )
}

export default ButtonPannel
