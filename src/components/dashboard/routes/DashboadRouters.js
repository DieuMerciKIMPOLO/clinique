import React from 'react';
import { Route,Switch } from 'react-router-dom';
import { All } from '../paths/All';
import { Users } from '../paths/Users';
import { Medecins } from '../paths/Medecins';
import { Gestionnaires } from '../paths/Gestionnaires';
import { Manager } from '../paths/Manager';
import { Admin } from '../paths/Admin';

export function DashboadRouters() {
    return(
        <Switch>
            <Route path={`/dashboard/all`} exact component={All} />
            <Route path={`/dashboard/users`}  component={Users} />
            <Route path={`/dashboard/medecins`} component={Medecins}/>
            <Route path={`/dashboard/gestionnaires`} component={Gestionnaires}/>
            <Route path={`/dashboard/manager`} component={Manager}/>
            <Route path={`/dashboard/admin`} component={Admin}/>
      </Switch>
    )
    
}