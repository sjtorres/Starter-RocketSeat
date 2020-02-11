const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductControllers');

// Criando a primeira rota
routes.get("/products", ProductController.index);

module.exports = routes;