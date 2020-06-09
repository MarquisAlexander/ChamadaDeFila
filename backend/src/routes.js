const express = require('express');

const PainelController = require('./controllers/PainelControler');
const Painel01Controller = require('./controllers/Painel01Controller');
// const CaixaController = require('./controllers/CaixaController');
// const Caixa01Controller = require('./controllers/Caixa01Controller');
// const Caixa02Controller = require('./controllers/Caixa02Controller');
// const Caixa03Controller = require('./controllers/Caixa03Controller');
// const Caixa04Controller = require('./controllers/Caixa04Controller');
const CaixasController = require('./controllers/CaixasController');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.get('/painel', PainelController.index);
routes.get('/painel1', Painel01Controller.index);
// routes.post('/caixa', CaixaController.create);
// routes.post('/caixa01', Caixa01Controller.create);
// routes.post('/caixa02', Caixa02Controller.create);
// routes.post('/caixa03', Caixa03Controller.create);
// routes.post('/caixa04', Caixa04Controller.create);
routes.post('/caixas', CaixasController.create);

module.exports = routes;