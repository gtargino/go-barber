import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);
        models
            .map(model => model.init(this.connection))
<<<<<<< HEAD
            .map(
                model =>
                    model.associate && model.associate(this.connection.models)
            );
=======
            .map(model => model.associate && model.associate(this.connection.models));
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab
    }
}

export default new Database();
