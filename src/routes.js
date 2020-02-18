const { Router } = require('express');
const DevControlller = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');

const routes = Router();

routes.get('/devs', DevControlller.index);
routes.post('/devs', DevControlller.store);
routes.get('/search', SearchController.index);
routes.put('/devs/:id', DevControlller.update);
routes.delete('/delete/:id', DevControlller.destroy);

module.exports = routes;