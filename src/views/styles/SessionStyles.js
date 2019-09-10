const SessionStyles = theme => ({
  card: {
    overflow: 'visible'
  },
  session: {
    position: 'relative',
    zIndex: 4000,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  background: {
    backgroundColor: theme.palette.primary.main
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
    flexDirection: 'column',
    minHeight: '100%',
    textAlign: 'center'
  },
  wrapper: {
    flex: 'none',
    maxWidth: '400px',
    width: '100%',
    margin: '0 auto'
  },
  avatar: {
    position: 'relative',
    display: 'block',
    margin: '-75px auto 0'
  },
  lockscreenWrapper: {
    flex: 'none',
    maxWidth: '280px',
    width: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: '150px',
    lineHeight: 1.2,
    fontWeight: 100,
    display: 'inline-table',
    position: 'relative',
    background: theme.palette.primary.main,
    color: '#fff',
    padding: `0 ${theme.spacing(3)}px`,
    borderRadius: '60px',
    cursor: 'pointer',
    margin: `0 0 ${theme.spacing(1)}px`,
    '&:after': {
      top: '100%',
      left: '50%',
      border: 'solid transparent',
      content: '""',
      height: 0,
      width: 0,
      position: 'absolute',
      pointerEvents: 'none',
      borderColor: 'rgba(0, 0, 0, 0)',
      borderTopColor: theme.palette.primary.main,
      borderWidth: '8px',
      marginLeft: '-8px'
    }
  },
  subtitle: {
    fontFamily: 'Helvetica, sans-serif',
    fontSize: '32px',
    fontWeight: 'bold'
  },
  linkAdmin: {
    fontSize: '20px',
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '10px',
    marginTop: '10px'
  },
  fullWidth: {
    width: '100%'
  },
  buttonFb: {
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 700,
    color: '#fff',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    textTransform: 'uppercase',
    transition: 'background-color .3s,border-color .3s',
    backgroundColor: '#4c69ba',
    border: '1px solid #4c69ba',
    //width: '50px',
    height: '40px',
    borderRadius: '5px',
  },
  buttonGmail: {
    marginLeft: '10px',
    backgroundColor: 'rgb(209, 72, 54)',
    display: 'inline-flex',
    alignItems: 'center',
    color: 'rgb(255, 255, 255)',
    textTransform: 'uppercase',
    //boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px',
    //width: '50px',
    height: '40px',
    borderRadius: '5px',
    border: '1px solid transparent',
    fontSize: '14px',
    fontWeight: 500,
    fontFamily: 'Roboto, sans-serif',
    cursor: 'pointer',
    opacity: 0.9
  }
})

export default SessionStyles;