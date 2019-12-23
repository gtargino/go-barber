import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
<<<<<<< HEAD
import FileController from './app/controllers/FileController';
=======
import FileController from '.app/controllers/FileController';
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);
<<<<<<< HEAD
=======
routes.post()
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab

export default routes;
