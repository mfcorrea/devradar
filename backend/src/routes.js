const { Router } = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');


const routes = new Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/search', SearchController.index)

module.exports = routes;


// Métodos HTTP: GET, POST, PUT, DELETE
//
// Tipos de parâmetros
//
// Query params: request.query (GET - filtros, paginação, ordenação)
// Route params: request.params não tem nome (PUT, DELETE - identificar um recurso na alteração ou remoção)
// Body: request.body (POST, PUT - dados para criação ou alteração de um registro)

// MongoDB (não-relacional)
