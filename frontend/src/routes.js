import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Caixa01 from '../src/pages/Caixa01';
// import Caixa02 from '../src/pages/Caixa02';
// import Caixa03 from '../src/pages/Caixa03';
// import Caixa04 from '../src/pages/Caixa04';
import Caixa01 from '../src/pages/Caixas/caixa01';
import Caixa02 from '../src/pages/Caixas/caixa02';
import Caixa03 from '../src/pages/Caixas/caixa03';
import Caixa04 from '../src/pages/Caixas/caixa04';
import Teste from '../src/pages/Painel/teste';
import TesteCaixa from '../src/pages/Caixas/test';
import Painel from './pages/Painel';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/caixa01"  component={Caixa01} />
                <Route path="/caixa02"  component={Caixa02} />
                <Route path="/caixa03"  component={Caixa03} />
                <Route path="/caixa04"  component={Caixa04} />
                <Route path="/teste" component={Teste} />
                <Route path="/testecaixa" component={TesteCaixa} />
                {/* <Route path="/caixa01"  component={Caixa01} />
                <Route path="/caixa02"  component={Caixa02} />
                <Route path="/caixa03"  component={Caixa03} />
                <Route path="/caixa04"  component={Caixa04} /> */}
                <Route path="/painel" exact component={Painel} />
            </Switch>
        </BrowserRouter>
    )
}