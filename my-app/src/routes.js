import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Form from './components/Form';


const AppRoutes=()=>

    <Switch>
        <Route path="/" component={Form} />
    </Switch>


export default AppRoutes;