import File from '../models/File';

class FileController {
<<<<<<< HEAD
    async store(req, res) {
        const { originalname: name, filename: path } = req.file;
        const file = await File.create({
            name,
            path,
        });
=======
    async store (req,res) {
        const { originalname: name, filename: path } = req.file;
        const file = await File.create({
            name,
            path
        })
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab

        return res.json(file);
    }
}

<<<<<<< HEAD
export default new FileController();
=======
export default new FileController();
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab
