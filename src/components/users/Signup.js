import React,{useEffect,useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux'
import {initSession } from '../../utils';
import { useDispatch } from 'react-redux'
import { registerUser } from '../../actions/users';
import Alert from '@material-ui/lab/Alert';
import Copyright from '../Copyright';
import CircularProgress from '@material-ui/core/CircularProgress';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const initState={
    username:"",
    email:"",
    password:"",
    roles:[]
}
export default function SignUp() {
  const classes = useStyles();
  const [state, setState]=useState(initState)
  const users = useSelector(state =>state.users);
  const signup = useSelector(state =>state.signup.signup);
  const dispatch = useDispatch()

  const handleChanges=(e)=>{
      setState({...state, [e.target.name]:e.target.value})
  }
  const handleSubmit=(event)=>{
     event.preventDefault();
     dispatch(registerUser('api/auth/signup','SIGNUP',state))
  }
  useEffect(()=>{
    dispatch(initSession())
  },[dispatch])
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Enregistrement
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
            {signup.message?<Alert severity="success" onClose={()=>dispatch({type:"REMOVE_SIGNUP_MESSAGES"})}>{signup.message}</Alert>:null}
            {signup.error?<Alert severity="error" onClose={()=>dispatch({type:"REMOVE_SIGNUP_MESSAGES"})}>{signup.error}</Alert>:null}
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Le nom d'utilisateur"
                autoFocus
                value={state.username}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Votre adresse email"
                name="email"
                autoComplete="email"
                value={state.email}
                onChange={handleChanges}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Votre mot de passe"
                type="password"
                id="password"
                autoComplete="current-password"
                value={state.password}
                onChange={handleChanges}
              />
            </Grid>
          </Grid>
          {!signup.spinner?
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            S'enregistrer
          </Button>:<CircularProgress color="inherit" />}
          <Grid container justify="center">
            <Grid item>
              <Link href="/signin" variant="body2">
                J'ai deja un compte
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}