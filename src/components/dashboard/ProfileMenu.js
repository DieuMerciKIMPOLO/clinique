import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch,useSelector} from 'react-redux'
import { initSession } from '../../utils';

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

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;
  useEffect(()=>{
    dispatch(initSession())
  },[dispatch])
  return (
    <div>
      <IconButton color="inherit" aria-describedby={id} onClick={handleClick}>
        <AccountCircleIcon />
    </IconButton>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div className={classes.paper}>{localStorage.getItem('usename')}</div>
        <div className={classes.paper}>{localStorage.getItem('email')}</div>
        <div className={classes.paper}>{localStorage.getItem('id')}</div>
      </Popper>
    </div>
  );
}