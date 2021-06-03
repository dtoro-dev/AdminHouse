import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

const themeConfig = {
  primary: '#86A4D3',
  secondary: '#00074B',
  backgroundContent: '#a1adc0d0',
  loading: {
    div_back: {
      background: "rgba(0, 7, 75, 0.5)",
      postion: "fixed",
      top: 0,
      left: 0,
      weidth: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    div_front: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  },
  fabButton: {
    fab: {
      position: "relative",
      margin: "5px"
    },
    btnFloat: {
      display: "flex",
      position: "fixed",
      bottom: 0,
      right: 0,
      justifyContent: "center",
      alignContent: "center",
      flexDirection: "column"
    },
  },
}

const theme = createMuiTheme({
  drawerWidth: 240,
  divider: {
    background: themeConfig.secondary
  },
  palette: {
    primary: {
      main: themeConfig.primary
    },
    secondary: {
      main: themeConfig.secondary
    }
  },
  config: themeConfig,
  particles: {
    style: {
      background: themeConfig.primary,
      display: 'block',
      position: 'fixed',
      zIndex: -1,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%'
    },
    params: {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: themeConfig.secondary
        },
        shape: {
          type: 'square',
          stroke: {
            width: 2,
            color: '#FFF'
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 0.4,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: true,
            speed: 5,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable_auto: true,
          distance: 100,
          color: themeConfig.secondary,
          opacity: 1,
          width: 1,
          condensed_mode: {
            enable: false,
            rotateX: 600,
            rotateY: 600
          }
        },
        move: {
          enable: true,
          speed: 5,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1400
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false
          },
          onclick: {
            enable: false
          },
          resize: true
        }
      },
      retina_detect: true
    }
  }
})

export default responsiveFontSizes(theme)