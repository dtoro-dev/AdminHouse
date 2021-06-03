import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { SideBar, NavBar } from '../Components'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    background: theme.config.backgroundContent,
    position: 'relative',
    width: '100%',
    height: '100vh'
  }
}));

const Interface = props => {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');

  const OpenMain = () => {
    setOpen(!open);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar
        open={open}
        setOpen={OpenMain}
        title={title}
        setTitle={setTitle} />
      <SideBar
        close={open}
        setClose={OpenMain}
        setTitle={setTitle} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
    </div>
  )
}

export default Interface
