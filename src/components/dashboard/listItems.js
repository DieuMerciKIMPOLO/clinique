import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
export const MainListItems = (props)=>{
  const useris={
    admin:props.roles.indexOf('ROLE_ADMIN')!== -1,
    medecin:props.roles.indexOf('ROLE_MEDECINS')!== -1,
    manager:props.roles.indexOf('ROLE_MANAGER')!== -1,
    gest   :props.roles.indexOf('ROLE_GESTIONNAIRE')!== -1
  };
  
  return(
  <div>
    <Link to="/dashboard/all">
      <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="All" />
    </ListItem>  
    </Link>

    {useris.admin? 
    <Link to="/dashboard/users">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>      
    </Link>   
    :null}
    {useris.medecin || useris.admin?
      <Link to="/dashboard/medecins">
      <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Medecins" />
    </ListItem>        
      </Link>
    :null}
    {useris.admin || useris.manager?
    <Link to="/dashboard/manager">
     <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Manager" />
    </ListItem>
    </Link>
    :null}
    {useris.admin ||  useris.gest?
      <Link to="/dashboard/gestionnaire">
      <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Gestionnaire" />
    </ListItem>
      </Link>
    :null}
    {useris.admin?
    <Link to="/dashboard/admin">
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Admin" />
    </ListItem>
    </Link>
    :null}
  </div>    
  )
}


export const secondaryListItems = (
  <div>
    <ListSubheader inset>Addition</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);