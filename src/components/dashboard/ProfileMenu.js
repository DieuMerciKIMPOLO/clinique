import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from 'react-redux'
import { initSession, handleLogout } from '../../utils';
import { getItem } from '../../actions/users';

const useStyles = makeStyles((theme) => ({
  paper: {
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ProfileMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch =useDispatch();
  const profile = useSelector(state=>state.signin.signin)
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  useEffect(()=>{
    if(!localStorage.getItem('accessToken')){
      window.location="/signin"
    }
    dispatch(initSession());
    dispatch(getItem('api/all','GET_ALL'));
    dispatch(getItem('api/users','GET_USERS'));
    dispatch(getItem('api/med','GET_MED'));
    dispatch(getItem('api/manager','GET_MANAGER'));
    dispatch(getItem('api/ges','GET_GES'));
    dispatch(getItem('api/admin','GET_ADMIN'));
  },[dispatch,localStorage.getItem('accessToken')])
  return (
    <div>
      <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
        <AccountCircleIcon />
    </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{profile.username}</div>
        <div className={classes.paper}>{profile.email}</div>
        <div className={classes.paper} onClick={handleLogout}>Logout</div>
      </Popper>
    </div>
  );
}