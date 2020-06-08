const express = require('express');

const CaixaController = require('./controllers/CaixaController');
const PainelController = require('./controllers/PainelControler');
const Painel01Controller = require('./controllers/Painel01Controller');

const routes = express.Router('controletarefa.cb8wpsrs2beg.us-east-2.rds.amazonaws.com');

routes.post('/caixa', CaixaController.create);
routes.get('/painel', PainelController.index);
routes.get('/painel1', Painel01Controller.index);

module.exports = routes;