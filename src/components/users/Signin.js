import React,{useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useDispatch, useSelector} from 'react-redux';
import {initSession } from '../../utils';
import { LoginUser} from '../../actions/users';
import Alert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const initState={
  username:"",
  password:"",
}
export default function SignIn() {
  const classes = useStyles();
  const [state, setState]=useState(initState);
  const signin = useSelector(state =>state.signin.signin);
  const dispatch = useDispatch()

  const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(LoginUser('api/auth/signin','SIGNIN',state))
  }
  const handleChanges=(e)=>{
    setState({...state, [e.target.name]:e.target.value})
  }
  useEffect(()=>{
    dispatch(initSession());
  },[dispatch]);


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
          {signin.message?<Alert severity="success" onClose={()=>dispatch({type:"REMOVE_SIGNIN_MESSAGES"})}>{signin.message}</Alert>:null}
          {signin.error?<Alert severity="error" onClose={()=>dispatch({type:"REMOVE_SIGNIN_MESSAGES"})}>{signin.error}</Alert>:null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Nom d'utilisateur"
              name="username"
              autoComplete="username"
              onChange={handleChanges}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChanges}
            />
            {signin.spinner?<CircularProgress color="inherit" />:<Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Se connecter
            </Button>}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}