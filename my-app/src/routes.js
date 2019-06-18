import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Form from './components/Form';
import Menu from './components/Menu';

const AppRoutes=()=>

   
<Switch>
<Route path="/menu" component={Menu} />
<Route path="/" component={Form} />
</Switch>


export default AppRoutes;