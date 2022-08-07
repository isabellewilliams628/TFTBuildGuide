
import db from '../config/database.js';
import {Sequelize} from "sequelize";

const Type = Sequelize;
const users = db.define('users', {
    username:{
        type: Type.STRING
    },
    email:{
        type: Type.STRING
    },
    password:{
        type: Type.STRING
    },
    refreshToken:{
        type: Type.TEXT
    }
}, {
    freezeTableName:true
});

(async () => {
    await db.sync();
})();

export default users;
