import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Form from './components/Form';
import Menu from './components/Menu';

const AppRoutes=()=>

    <Switch>
        <Route path="/" component={Form} />
        <Route path="/n" component={Menu} />
    </Switch>


export default AppRoutes;