const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();
mongoose.connect('mongodb+srv://ramon:mon123123@cluster0-jelma.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(1010);

// MÉTODOS HTTP: GET, POST, PUT, DELETE

// TIPOS DE PARÂMETROS

// Query Params: request.query (Filtros, ordenação, ...)
// Query Params: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)

// MongoDB (Banco não-relacional)