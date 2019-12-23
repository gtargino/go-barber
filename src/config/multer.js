import multer from 'multer';
import crypto from 'crypto';
import { extname, resolve } from 'path';

export default {
    storage: multer.diskStorage({
<<<<<<< HEAD
        destination: resolve(__dirname, '..', '..', 'tmp', 'uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);
                return cb(
                    null,
                    res.toString('hex') + extname(file.originalname)
                );
            });
        },
    }),
};
=======
        destination: resolve(__dirname, '..','..','tmp','uploads'),
        filename: (req, file, cb) => {
            crypto.randomBytes(16,(err, res) => {
                if (err) return cb(err);
                return cb(null, res.toString('hex') + extname(file.originalname));
            }) 
        },
    }),
};
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab
