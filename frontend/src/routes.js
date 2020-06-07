import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Caixa from '../src/pages/Caixa';
import Painel from './pages/Painel';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Caixa} />
                <Route path="/painel" component={Painel} />
            </Switch>
        </BrowserRouter>
    )
}