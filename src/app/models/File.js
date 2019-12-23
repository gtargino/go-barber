import Sequelize, { Model } from 'sequelize';

class File extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
<<<<<<< HEAD
}

export default File;
=======

}

export default User;
>>>>>>> 6a2dbc800c2c1dfa81020bfbfb8b8cb17559c2ab
