import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import Caixa01 from '../src/pages/Caixa01';
// import Caixa02 from '../src/pages/Caixa02';
// import Caixa03 from '../src/pages/Caixa03';
// import Caixa04 from '../src/pages/Caixa04';
import Caixas from '../src/pages/Caixas';
import Painel from './pages/Painel';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/caixas"  component={Caixas} />
                {/* <Route path="/caixa01"  component={Caixa01} />
                <Route path="/caixa02"  component={Caixa02} />
                <Route path="/caixa03"  component={Caixa03} />
                <Route path="/caixa04"  component={Caixa04} /> */}
                <Route path="/painel" exact component={Painel} />
            </Switch>
        </BrowserRouter>
    )
}