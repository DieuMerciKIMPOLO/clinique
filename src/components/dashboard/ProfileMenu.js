import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from "react-router-dom";
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
  const state= useSelector(state=>state.signin.signin);
  // const dispatch =useDispatch();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  let browserHistory = useHistory();
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  // if(!state.authenticated){
  //   browserHistory.push('/')
  // }
  console.log("authenticated",state)
  return (
    <div>
      <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
        <AccountCircleIcon />
    </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{state.usename}</div>
        <div className={classes.paper}>{state.email}</div>
        <div className={classes.paper}>{state.roles.toString()}</div>
      </Popper>
    </div>
  );
}