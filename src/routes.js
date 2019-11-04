// without sucrase
// const { Router } = require('express');

// with sucrase
import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Gustavo Targino',
        email: 'gustavodiniztargino@hotmail.com',
        password_hash: '123456000',
    });
    return res.json(user);
});

export default routes;
