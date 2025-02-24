import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route path="/products/:id" component={Product}></Route>
    </Switch>
    </BrowserRouter>
);

export default Routes;