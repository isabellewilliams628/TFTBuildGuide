import db from '../config/database.js';
import Sequelize from "sequelize";
const Type = Sequelize;

const userFeedback = db.define('feedback', {
    feedback:{
        type: Type.STRING
    },
    email:{
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

export default userFeedback;