// without sucrase
// const express = require('express');
// const routes = require('./routes');

// with sucrase
import express from 'express';
import routes from './routes';

import './database';

class App {
    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

// without sucrase
// module.exports = new App().server;

// with sucrase
export default new App().server;
